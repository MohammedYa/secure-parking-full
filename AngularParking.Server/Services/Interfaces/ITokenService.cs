using Microsoft.AspNetCore.Identity;
using AngularParking.Server.Data.Models;

namespace AngularParking.Server.Services.Interfaces;
public interface ITokenService
{
    Task<string> CreateToken(ApplicationUser user, UserManager<ApplicationUser> userManager);
}

