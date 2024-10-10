using AngularParking.Server.Data.Models;

namespace AngularParking.Server.Dtos;

public class ApplicationFormToReturnDto : ApplicationFormDto
{
    public int Id { get; set; }
    public string Status { get; set; }
}


public class CreateApplicationFormActionDto
{
    public int Id { get; set; }
    public StatusAction Status { get; set; }
}

public class ChangePasswordDto
{    
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
}

public class ImageRequestDto
{
    public IFormFile Image { get; set; }
}