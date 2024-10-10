using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AngularParking.Server.Data.Models;
using System.Reflection;

namespace AngularParking.Server.Data;
public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }

    public virtual DbSet<PersonalInfo> PersonalInfos { get; set; }
    public virtual DbSet<Truck> Trucks { get; set; }
    public virtual DbSet<MoveInInfo> MoveInInfos { get; set; }
    public virtual DbSet<FleetInfo> FleetInfos { get; set; }
    public virtual DbSet<BankingInfo> BankingInfos { get; set; }
    public virtual DbSet<PreviousLandlords> PreviousLandlords { get; set; }
    public virtual DbSet<References> References { get; set; }
}

