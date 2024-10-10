using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AngularParking.Server.Data.Migrations
{
    public partial class AddStatusToTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "PersonalInfos",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "PersonalInfos");
        }
    }
}
