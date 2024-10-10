using AngularParking.Server.Data.Models;

namespace AngularParking.Server.Dtos;
public class LoginRequestDto
{
    public string UserName { get; set; } = null!;
    public string Password { get; set; } = null!;
}
public class ApplicationFormDto
{
    public PersonalInfoDto PersonalInfo { get; set; }
    public TruckDto Truck { get; set; }
    public MoveInInfoDto MoveInInfo { get; set; }
    public FleetInfoDto FleetInfo { get; set; }
    public BankingInfoDto BankingInfo { get; set; }

    public List<PreviousLandlordsDto> PreviousLandlords { get; set; } = new();
    public List<ReferencesDto> References { get; set; } = new();
}

public class PersonalInfoDto
{
    public string FirstName { get; set; } = null!;
    public string MiddleName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string PhoneNumber { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string StreetAddress { get; set; } = null!;
    public string AptUnitNumber { get; set; } = null!;
    public string City { get; set; } = null!;
    public string State { get; set; } = null!;
    public string PostalZipCode { get; set; } = null!;
    public string? ApplicantDate { get; set; }


    public string? ArticleOfIncorporationPath { get; set; }
    public string? CompanyOwnersDriverLicensePath { get; set; }
    public string? CertificateOfInsurancePath { get; set; }
    public string? CertifiedPaymentPath { get; set; }
    public string? PostdatedChecksPath { get; set; }
}

public class TruckDto
{
    public int HighwayTrucks { get; set; }
    public int DayCab { get; set; }
    public int BoxTrucks { get; set; }
    public int DumpTrucks { get; set; }
    public int DryVans { get; set; }
    public int Reefer { get; set; }
    public int Flatbed { get; set; }
    public int OtherTrailers { get; set; }
}

public class MoveInInfoDto
{
    public string? MoveInDate { get; set; }
    public int TruckOrTrailers { get; set; }
    public double RateApprovedPerSpot { get; set; }
    public string LocationAppliedFor { get; set; }
    public bool IsCarrierBasedInOntario { get; set; }
    public string StateOrProvince { get; set; }
}

public class FleetInfoDto
{
    public string? LastBouncedCheckOrMissedPayment { get; set; }
    public bool? HasBouncedCheckOrMissedPayment { get; set; }
    public string? BouncedCheckExplanation { get; set; }
    public bool? HasInternalFleetRepairShop { get; set; }
    public bool? WillPerformMaintenanceOnProperties { get; set; }
}

public class BankingInfoDto
{
    public string? Bank { get; set; }
    public string? Contact { get; set; }
    public string? Phone { get; set; }
    public string? Address { get; set; }
}

public class PreviousLandlordsDto
{
    public string Company { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string LandlordName { get; set; }
    public string SpaceRented { get; set; }
    public string? RentalStartDate { get; set; }
    public string? RentalEndDate { get; set; }
    public bool CanContactForReference { get; set; }
}

public class ReferencesDto
{
    public string Name { get; set; }
    public string Relationship { get; set; }
    public string Company { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
}