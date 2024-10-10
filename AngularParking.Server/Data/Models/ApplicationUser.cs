using Microsoft.AspNetCore.Identity;

namespace AngularParking.Server.Data.Models;
public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
}

public class PersonalInfo
{
    public int Id { get; set; }
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

    public virtual Truck Truck { get; set; }
    public virtual MoveInInfo MoveInInfo { get; set; }
    public virtual FleetInfo FleetInfo { get; set; }
    public virtual BankingInfo BankingInfo { get; set; }

    public virtual ICollection<PreviousLandlords> PreviousLandlords { get; set; }
    public virtual ICollection<References> References { get; set; }

    public string? ArticleOfIncorporationPath { get; set; }
    public string? CompanyOwnersDriverLicensePath { get; set; }
    public string? CertificateOfInsurancePath { get; set; }
    public string? CertifiedPaymentPath { get; set; }
    public string? PostdatedChecksPath { get; set; }
    public SatusEnum Status { get; set; } = SatusEnum.Pending;
}

public class Truck
{
    public int Id { get; set; }
    public int HighwayTrucks { get; set; }
    public int DayCab { get; set; }
    public int BoxTrucks { get; set; }
    public int DumpTrucks { get; set; }
    public int DryVans { get; set; }
    public int Reefer { get; set; }
    public int Flatbed { get; set; }
    public int OtherTrailers { get; set; }

    public int PersonalInfoId { get; set; }
    public virtual PersonalInfo PersonalInfo { get; set; }
}

public class MoveInInfo
{
    public int Id { get; set; }
    public string? MoveInDate { get; set; }
    public int TruckOrTrailers { get; set; }
    public double RateApprovedPerSpot { get; set; }
    public string LocationAppliedFor { get; set; }
    public bool IsCarrierBasedInOntario { get; set; }
    public string StateOrProvince { get; set; }

    public int PersonalInfoId { get; set; }
    public virtual PersonalInfo PersonalInfo { get; set; }
}

public class FleetInfo
{
    public int Id { get; set; }
    public string? LastBouncedCheckOrMissedPayment { get; set; }
    public bool? HasBouncedCheckOrMissedPayment { get; set; }
    public string? BouncedCheckExplanation { get; set; }
    public bool? HasInternalFleetRepairShop { get; set; }
    public bool? WillPerformMaintenanceOnProperties { get; set; }

    public int PersonalInfoId { get; set; }
    public virtual PersonalInfo PersonalInfo { get; set; }
}

public class BankingInfo
{
    public int Id { get; set; }
    public string? Bank { get; set; }
    public string? Contact { get; set; }
    public string? Phone { get; set; }
    public string? Address { get; set; }

    public int PersonalInfoId { get; set; }
    public virtual PersonalInfo PersonalInfo { get; set; }
}

public class PreviousLandlords
{
    public int Id { get; set; }
    public string Company { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string LandlordName { get; set; }
    public string SpaceRented { get; set; }
    public string? RentalStartDate { get; set; }
    public string? RentalEndDate { get; set; }
    public bool CanContactForReference { get; set; }

    public int PersonalInfoId { get; set; }
    public virtual PersonalInfo PersonalInfo { get; set; }
}

public class References
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Relationship { get; set; }
    public string Company { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }

    public int PersonalInfoId { get; set; }
    public virtual PersonalInfo PersonalInfo { get; set; }
}

public enum SatusEnum
{
    Pending,
    Accepted, 
    Rejected
}

public enum StatusAction
{
    Accepted,
    Rejected
}