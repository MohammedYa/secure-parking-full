using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularParking.Server.Data;
using AngularParking.Server.Data.Models;
using AngularParking.Server.Dtos;
using AngularParking.Server.Helpers;
using AngularParking.Server.Services.Interfaces;

[Route("api/[controller]")]
[ApiController]
public class ApplicationFormDataController : ControllerBase
{
    private readonly IImageService _imageService;
    private readonly IMapper _mapper;
    private readonly ApplicationDbContext _context;

    public ApplicationFormDataController(IImageService imageService, IMapper mapper, ApplicationDbContext context)
    {
        _imageService = imageService;
        _mapper = mapper;
        _context = context;
    }    

    /// <summary>
    /// هيترم رفع الصوره هرفع نص بمانها على السريرفر هيتبعت مع النصر
    /// </summary>
    /// <param name="Image"></param>
    /// <returns></returns>
    [HttpPost("ArticleOfIncorporation", Name = "ArticleOfIncorporation")]
    public async Task<IActionResult> ArticleOfIncorporation([FromForm] ImageRequestDto request )
    {
        var result = await _imageService.UploadAsync(request.Image, "Images");
        return Ok(new { response = result });

    }

    /// <summary>
    /// هيترم رفع الصوره هرفع نص بمانها على السريرفر هيتبعت مع النصر
    /// </summary>
    /// <param name="Image"></param>
    /// <returns></returns>
    [HttpPost("CompanyOwnersDriverLicense", Name = "CompanyOwnersDriverLicense")]
    public async Task<IActionResult> CompanyOwnersDriverLicense([FromForm] ImageRequestDto request)
    {
        var result = await _imageService.UploadAsync(request.Image, "Images");
        return Ok(new { response = result });

    }

    /// <summary>
    /// هيترم رفع الصوره هرفع نص بمانها على السريرفر هيتبعت مع النصر
    /// </summary>
    /// <param name="Image"></param>
    /// <returns></returns>
    [HttpPost("CertificateOfInsurance", Name = "CertificateOfInsurance")]
    public async Task<IActionResult> CertificateOfInsurance([FromForm] ImageRequestDto request)
    {
        var result = await _imageService.UploadAsync(request.Image, "Images");
        return Ok(new { response = result });

    }

    /// <summary>
    /// هيترم رفع الصوره هرفع نص بمانها على السريرفر هيتبعت مع النصر
    /// </summary>
    /// <param name="Image"></param>
    /// <returns></returns>
    [HttpPost("CertifiedPayment", Name = "CertifiedPayment")]
    public async Task<IActionResult> CertifiedPayment([FromForm] ImageRequestDto request)
    {
        var result = await _imageService.UploadAsync(request.Image, "Images");
        return Ok(new { response = result });

    }

    /// <summary>
    /// هيترم رفع الصوره هرفع نص بمانها على السريرفر هيتبعت مع النصر
    /// </summary>
    /// <param name="Image"></param>
    /// <returns></returns>
    [HttpPost("PostdatedChecks", Name = "PostdatedChecks")]
    public async Task<IActionResult> PostdatedChecks([FromForm] ImageRequestDto request)
    {
        var result = await _imageService.UploadAsync(request.Image, "Images");
        return Ok(new { response = result });

    }

    /// <summary>
    /// Form For All Users
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    /// <exception cref="LogicException"></exception>
    [HttpPost("CreateApplicationForm", Name = "CreateApplicationForm")]
    public async Task<IActionResult> CreateApplicationForm([FromBody] ApplicationFormDto request)
    {
        var personalInfo = _mapper.Map<PersonalInfo>(request.PersonalInfo);
        personalInfo.Status = SatusEnum.Pending;
        personalInfo.Truck = _mapper.Map<Truck>(request.Truck);
        personalInfo.MoveInInfo = _mapper.Map<MoveInInfo>(request.MoveInInfo);
        personalInfo.FleetInfo = _mapper.Map<FleetInfo>(request.FleetInfo);
        personalInfo.BankingInfo = _mapper.Map<BankingInfo>(request.BankingInfo);
        personalInfo.PreviousLandlords = _mapper.Map<List<PreviousLandlords>>(request.PreviousLandlords);
        personalInfo.References = _mapper.Map<List<References>>(request.References);

        //if (
        //    !_imageService.IsPathExist(personalInfo.ArticleOfIncorporationPath) ||
        //    !_imageService.IsPathExist(personalInfo.CompanyOwnersDriverLicensePath) ||
        //    !_imageService.IsPathExist(personalInfo.CertificateOfInsurancePath) ||
        //    !_imageService.IsPathExist(personalInfo.CertifiedPaymentPath) ||
        //    !_imageService.IsPathExist(personalInfo.PostdatedChecksPath) 
        //    )
        //    throw new LogicException("Choose Valid Images");

        await _context.PersonalInfos.AddAsync(personalInfo);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Done" });
    }

    /// <summary>
    /// Admins Only
    /// .../GetApplicationFormById/1 => For Example
    ///     Status == null => All
    ///            == 0 => Pending
    ///            == 1 => Accpted
    ///            == 2 => Rejected
    /// </summary>
    /// <param name="Id"></param>
    /// <returns></returns>
    [Authorize]
    [HttpGet("GetApplicationFormById/{Id}", Name = "GetApplicationFormById")]
    public async Task<IActionResult> GetApplicationFormById(int Id, [FromQuery] Nullable<SatusEnum> Status)
    {
        var personalInfo = await _context.PersonalInfos
            .Where(x => x.Id == Id)
            .Where(x => Status == null || x.Status == Status)
                .Include(x => x.Truck)
                .Include(x => x.MoveInInfo)
                .Include(x => x.FleetInfo)
                .Include(x => x.BankingInfo)
                .Include(x => x.PreviousLandlords)
                .Include(x => x.References)
                    .AsNoTracking()
                    .FirstOrDefaultAsync() ?? throw new KeyNotFoundException("Element Not Exist");

        var response = new ApplicationFormToReturnDto
        {
            Id = personalInfo.Id,
            Status = personalInfo.Status.ToString(),
            PersonalInfo = _mapper.Map<PersonalInfoDto>(personalInfo),
            Truck = _mapper.Map<TruckDto>(personalInfo.Truck),
            MoveInInfo = _mapper.Map<MoveInInfoDto>(personalInfo.MoveInInfo),
            FleetInfo = _mapper.Map<FleetInfoDto>(personalInfo.FleetInfo),
            BankingInfo = _mapper.Map<BankingInfoDto>(personalInfo.BankingInfo),
            PreviousLandlords = _mapper.Map<List<PreviousLandlordsDto>>(personalInfo.PreviousLandlords),
            References = _mapper.Map<List<ReferencesDto>>(personalInfo.References),
        };

        response.PersonalInfo.ArticleOfIncorporationPath = _imageService.GetImageFullPath(response.PersonalInfo.ArticleOfIncorporationPath);
        response.PersonalInfo.CompanyOwnersDriverLicensePath = _imageService.GetImageFullPath(response.PersonalInfo.CompanyOwnersDriverLicensePath);
        response.PersonalInfo.CertificateOfInsurancePath = _imageService.GetImageFullPath(response.PersonalInfo.CertificateOfInsurancePath);
        response.PersonalInfo.CertifiedPaymentPath = _imageService.GetImageFullPath(response.PersonalInfo.CertifiedPaymentPath);
        response.PersonalInfo.PostdatedChecksPath = _imageService.GetImageFullPath(response.PersonalInfo.PostdatedChecksPath);

        return Ok(response);
    }
    
    /// <summary>
    /// Admins Only
    /// .../GetAllApplicationForm?skit=0&take=5&status=1 => For Example
    ///     Status == null => All
    ///            == 0 => Pending
    ///            == 1 => Accpted
    ///            == 2 => Rejected
    /// </summary>    
    /// <returns></returns>
    [Authorize]
    [HttpGet("GetAllApplicationForm", Name = "GetAllApplicationForm")]
    public async Task<IActionResult> GetAllApplicationForm([FromQuery] int? skip = 0, [FromQuery] int? take = 10, [FromQuery] Nullable<SatusEnum> Status = null)
    {
        skip = skip ?? 0;
        take = take ?? 10;
        var list = await _context.PersonalInfos
            .Where(x => Status == null || x.Status == Status)
            .Skip(skip!.Value).Take(take!.Value)
                .Include(x => x.Truck)
                .Include(x => x.MoveInInfo)
                .Include(x => x.FleetInfo)
                .Include(x => x.BankingInfo)
                .Include(x => x.PreviousLandlords)
                .Include(x => x.References)
                    .AsNoTracking()
                    .ToListAsync() ?? throw new KeyNotFoundException("Element Not Exist");

        var data = new List<ApplicationFormToReturnDto>();
        foreach (var personalInfo in list)
        {
            var obj = new ApplicationFormToReturnDto
            {
                Id = personalInfo.Id,
                Status = personalInfo.Status.ToString(),
                PersonalInfo = _mapper.Map<PersonalInfoDto>(personalInfo),
                Truck = _mapper.Map<TruckDto>(personalInfo.Truck),
                MoveInInfo = _mapper.Map<MoveInInfoDto>(personalInfo.MoveInInfo),
                FleetInfo = _mapper.Map<FleetInfoDto>(personalInfo.FleetInfo),
                BankingInfo = _mapper.Map<BankingInfoDto>(personalInfo.BankingInfo),
                PreviousLandlords = _mapper.Map<List<PreviousLandlordsDto>>(personalInfo.PreviousLandlords),
                References = _mapper.Map<List<ReferencesDto>>(personalInfo.References),
            };

            obj.PersonalInfo.ArticleOfIncorporationPath = _imageService.GetImageFullPath(obj.PersonalInfo.ArticleOfIncorporationPath);
            obj.PersonalInfo.CompanyOwnersDriverLicensePath = _imageService.GetImageFullPath(obj.PersonalInfo.CompanyOwnersDriverLicensePath);
            obj.PersonalInfo.CertificateOfInsurancePath = _imageService.GetImageFullPath(obj.PersonalInfo.CertificateOfInsurancePath);
            obj.PersonalInfo.CertifiedPaymentPath = _imageService.GetImageFullPath(obj.PersonalInfo.CertifiedPaymentPath);
            obj.PersonalInfo.PostdatedChecksPath = _imageService.GetImageFullPath(obj.PersonalInfo.PostdatedChecksPath);


            data.Add(obj);
        }

        var count = _context.PersonalInfos
            .Where(x => Status == null || x.Status == Status).Count();

        return Ok(new { PageSize = take, Count = count, Data = data });
    }

    /// <summary>
    /// Admins Only
    /// .../GetStatiscs?status=1 => For Example
    ///     Status == null => All
    ///            == 0 => Pending
    ///            == 1 => Accpted
    ///            == 2 => Rejected
    /// </summary>    
    /// <returns></returns>
    [Authorize]
    [HttpGet("GetStatiscs", Name = "GetStatiscs")]
    public async Task<IActionResult> GetStatiscs([FromQuery] SatusEnum? Status = null)
    {
        return Ok(new { Count = _context.PersonalInfos.Count(x => Status == null || x.Status == Status) });
    }

    /// <summary>
    /// 0 => Accepted
    /// 1 => Rejected
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    /// <exception cref="LogicException"></exception>
    [Authorize]
    [HttpPost("CreateApplicationFormAction", Name = "CreateApplicationFormAction")]
    public async Task<IActionResult> CreateApplicationFormAction([FromBody] CreateApplicationFormActionDto request)
    {
        var obj = await _context.PersonalInfos.FirstOrDefaultAsync(x => x.Id == request.Id && x.Status == SatusEnum.Pending) ??
            throw new LogicException("Element Not Exist.");

        if (request.Status == StatusAction.Accepted)
            obj.Status = SatusEnum.Accepted;
        else
            obj.Status = SatusEnum.Rejected;

        _context.Update(obj);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Success", IsSuccess = true });
    }
}