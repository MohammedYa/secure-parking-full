using Microsoft.AspNetCore.Identity;
using AngularParking.Server.Data.Models;
using AngularParking.Server.Helpers;
using AngularParking.Server.Services.Interfaces;

namespace AngularParking.Server.Services.Implementations;

internal class AuthService : IAuthService
{
    private readonly UserManager<ApplicationUser> _userManager;    

    public AuthService(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;        
    }

    public async Task<(bool isSuccess, ApplicationUser user)> LoginAsync(string userName, string password)
    {
        var userResult = (await _userManager.FindByNameAsync(userName) ?? await _userManager.FindByEmailAsync(userName)) ??
            throw new LogicException("Invalid Username Or Password.");

        if (!await _userManager.CheckPasswordAsync(userResult, password))
            throw new LogicException("Invalid Username Or Password.");

        return (isSuccess: true, user: userResult);
    }
}

