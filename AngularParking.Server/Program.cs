using AngularParking.Server.Api.Middlewares;
using AngularParking.Server.Data.Models;
using AngularParking.Server.Data.Seeds;
using AngularParking.Server.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowOrigin");
app.UseRouting();

app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.MapFallbackToFile("/index.html");
#region Seed And Logger
var scopeFactory = app.Services.GetRequiredService<IServiceScopeFactory>();
using var scope = scopeFactory.CreateScope();
var loggerFactory = scope.ServiceProvider.GetRequiredService<ILoggerFactory>();
try
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    await context.Database.MigrateAsync();

    var roleManger = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    var userManger = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
    await app.SeedDefaultRoleAndUserAsync(roleManger, userManger);

    loggerFactory.CreateLogger<Program>().LogInformation("Application Start.");
}
catch (Exception ex)
{
    loggerFactory.CreateLogger<Program>().LogError(ex, "An error occurred during migration");
}
#endregion

app.Run();
