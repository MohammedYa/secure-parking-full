using AngularParking.Server.Data.Models;

namespace AngularParking.Server.Services.Interfaces;

public interface IAuthService
{
    Task<(bool isSuccess, ApplicationUser user)> LoginAsync(string userName, string password);
}

