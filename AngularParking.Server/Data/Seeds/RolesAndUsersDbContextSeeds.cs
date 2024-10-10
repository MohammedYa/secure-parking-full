using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using AngularParking.Server.Data.Models;

namespace AngularParking.Server.Data.Seeds;

public static class RolesAndUsersDbContextSeeds
{
    public static async Task SeedDefaultRoleAndUserAsync(this IHost host, RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
    {
        await SeedRolesAsync(roleManager);
        await SeedUsersAsync(userManager);
    }
    private static async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager)
    {
        if (!await roleManager.Roles.AnyAsync())
        {
            await roleManager.CreateAsync(new IdentityRole
            {
                Id = Guid.NewGuid().ToString(),
                Name = Roles.Admin,
                NormalizedName = Roles.Admin.ToUpper(),
                ConcurrencyStamp = Guid.NewGuid().ToString()
            });
        }
    }
    private static async Task SeedUsersAsync(UserManager<ApplicationUser> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new ApplicationUser()
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = "admin",
                LastName = "admin",
                UserName = "admin",
                Email = "admin@admin.com",
                EmailConfirmed = true
            };
            var result = await userManager.CreateAsync(user, "123456");
            if (result.Succeeded)
            {
                var roles = new List<string>()
                {
                    Roles.Admin
                };
                await userManager.AddToRolesAsync(user, roles);
            }
        }
    }
}
