using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AngularParking.Server.Data.Migrations
{
    public partial class AddApplicationFormDataTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PersonalInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StreetAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AptUnitNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalZipCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ApplicantDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ArticleOfIncorporationPath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CompanyOwnersDriverLicensePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CertificateOfInsurancePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CertifiedPaymentPath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostdatedChecksPath = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalInfos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BankingInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bank = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Contact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonalInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankingInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BankingInfos_PersonalInfos_PersonalInfoId",
                        column: x => x.PersonalInfoId,
                        principalTable: "PersonalInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FleetInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastBouncedCheckOrMissedPayment = table.Column<DateTime>(type: "datetime2", nullable: true),
                    HasBouncedCheckOrMissedPayment = table.Column<bool>(type: "bit", nullable: true),
                    BouncedCheckExplanation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HasInternalFleetRepairShop = table.Column<bool>(type: "bit", nullable: true),
                    WillPerformMaintenanceOnProperties = table.Column<bool>(type: "bit", nullable: true),
                    PersonalInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FleetInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FleetInfos_PersonalInfos_PersonalInfoId",
                        column: x => x.PersonalInfoId,
                        principalTable: "PersonalInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MoveInInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MoveInDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TruckOrTrailers = table.Column<int>(type: "int", nullable: false),
                    RateApprovedPerSpot = table.Column<double>(type: "float", nullable: false),
                    LocationAppliedFor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsCarrierBasedInOntario = table.Column<bool>(type: "bit", nullable: false),
                    StateOrProvince = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonalInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MoveInInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MoveInInfos_PersonalInfos_PersonalInfoId",
                        column: x => x.PersonalInfoId,
                        principalTable: "PersonalInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PreviousLandlords",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LandlordName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SpaceRented = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RentalStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RentalEndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CanContactForReference = table.Column<bool>(type: "bit", nullable: false),
                    PersonalInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviousLandlords", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PreviousLandlords_PersonalInfos_PersonalInfoId",
                        column: x => x.PersonalInfoId,
                        principalTable: "PersonalInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "References",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Relationship = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonalInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_References", x => x.Id);
                    table.ForeignKey(
                        name: "FK_References_PersonalInfos_PersonalInfoId",
                        column: x => x.PersonalInfoId,
                        principalTable: "PersonalInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Trucks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HighwayTrucks = table.Column<int>(type: "int", nullable: false),
                    DayCab = table.Column<int>(type: "int", nullable: false),
                    BoxTrucks = table.Column<int>(type: "int", nullable: false),
                    DumpTrucks = table.Column<int>(type: "int", nullable: false),
                    DryVans = table.Column<int>(type: "int", nullable: false),
                    Reefer = table.Column<int>(type: "int", nullable: false),
                    Flatbed = table.Column<int>(type: "int", nullable: false),
                    OtherTrailers = table.Column<int>(type: "int", nullable: false),
                    PersonalInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trucks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Trucks_PersonalInfos_PersonalInfoId",
                        column: x => x.PersonalInfoId,
                        principalTable: "PersonalInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BankingInfos_PersonalInfoId",
                table: "BankingInfos",
                column: "PersonalInfoId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FleetInfos_PersonalInfoId",
                table: "FleetInfos",
                column: "PersonalInfoId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MoveInInfos_PersonalInfoId",
                table: "MoveInInfos",
                column: "PersonalInfoId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PreviousLandlords_PersonalInfoId",
                table: "PreviousLandlords",
                column: "PersonalInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_References_PersonalInfoId",
                table: "References",
                column: "PersonalInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_Trucks_PersonalInfoId",
                table: "Trucks",
                column: "PersonalInfoId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BankingInfos");

            migrationBuilder.DropTable(
                name: "FleetInfos");

            migrationBuilder.DropTable(
                name: "MoveInInfos");

            migrationBuilder.DropTable(
                name: "PreviousLandlords");

            migrationBuilder.DropTable(
                name: "References");

            migrationBuilder.DropTable(
                name: "Trucks");

            migrationBuilder.DropTable(
                name: "PersonalInfos");
        }
    }
}
