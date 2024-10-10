using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using AngularParking.Server.Data.Models;
using AngularParking.Server.Dtos;
using AngularParking.Server.Helpers;
using AngularParking.Server.Services.Interfaces;

[Route("api")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly ITokenService _tokenService;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IHttpContextAccessor _contextAccessor;

    public AuthController(IAuthService authService, ITokenService tokenService, UserManager<ApplicationUser> userManager, IHttpContextAccessor contextAccessor)
    {
        _authService = authService;
        _tokenService = tokenService;
        _userManager = userManager;
        _contextAccessor = contextAccessor;
    }

    [AllowAnonymous]
    [HttpPost("Login", Name = "Login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
    {
        var result = await _authService.LoginAsync(request.UserName, request.Password);
        return Ok(new LoginResponseDto
        {
            UserName = result.user.UserName,
            FirstName = result.user.FirstName,
            LastName = result.user.LastName,
            Email = result.user.Email,
            Token = await _tokenService.CreateToken(result.user, _userManager)
        });
    }

    [Authorize]
    [HttpPost("ChangePassword", Name = "ChangePassword")]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto request)
    {
        if (request.Password != request.ConfirmPassword)
            throw new LogicException("password And Confirm Password Not Match.");
        var currentUserId = _contextAccessor.HttpContext.User.FindFirst("Id")!.Value;
        var user = await _userManager.FindByIdAsync(currentUserId) ??
            throw new LogicException("Happen Exception Please Try Again");
        var token = await _userManager.GeneratePasswordResetTokenAsync(user);
        await _userManager.ResetPasswordAsync(user, token, request.Password);
        return Ok(new { message = "Success", IsSuccess = true });
    }

}
