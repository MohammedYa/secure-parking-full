using AutoMapper;
using AngularParking.Server.Data.Models;
using AngularParking.Server.Dtos;

namespace AngularParking.Server.Helpers;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<PersonalInfoDto, PersonalInfo>().ReverseMap();
        CreateMap<TruckDto, Truck>().ReverseMap();
        CreateMap<MoveInInfoDto, MoveInInfo>().ReverseMap();
        CreateMap<FleetInfoDto, FleetInfo>().ReverseMap();
        CreateMap<BankingInfoDto, BankingInfo>().ReverseMap();
        CreateMap<PreviousLandlordsDto, PreviousLandlords>().ReverseMap();
        CreateMap<ReferencesDto, References>().ReverseMap();
    }
}