namespace AngularParking.Server.Services.Interfaces;

public interface IImageService
{
    Task<string> UploadAsync(IFormFile image, string folderPath);
    void Delete(string? imagePath);
    string? GetImageFullPath(string? imagePath);
    bool IsPathExist(string? imagePath);
}

