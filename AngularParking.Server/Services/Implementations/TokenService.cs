using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using AngularParking.Server.Data.Models;
using AngularParking.Server.Helpers;
using AngularParking.Server.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AngularParking.Server.Services.Implementations;

internal class TokenService : ITokenService
{
    private readonly JWT _jwt;
    public TokenService(IOptions<JWT> option)
    {
        _jwt = option.Value;
    }
    public async Task<string> CreateToken(ApplicationUser user, UserManager<ApplicationUser> userManager)
    {
        var authClaims = new List<Claim>()
            {
                new Claim("Id", user.Id),
                new Claim(ClaimTypes.Name, user.UserName!),
                new Claim(ClaimTypes.GivenName, user.FirstName + " " + user.LastName)
            };

        var userRoles = await userManager.GetRolesAsync(user);

        foreach (var role in userRoles)
            authClaims.Add(new Claim(ClaimTypes.Role, role.ToString()));


        var authKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwt.Key!));

        var token = new JwtSecurityToken(

            issuer: _jwt.Issuer!,
            audience: _jwt.Audience!,
            expires: DateTime.Now.AddDays(double.Parse(_jwt.DurationInDays!.ToString())),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authKey, SecurityAlgorithms.HmacSha256Signature)
            );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}

