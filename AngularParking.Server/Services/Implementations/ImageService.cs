using Microsoft.AspNetCore.Http.Extensions;
using AngularParking.Server.Helpers;
using AngularParking.Server.Services.Interfaces;

namespace AngularParking.Server.Services.Implementations;

internal class ImageService : IImageService
{
    private readonly IHttpContextAccessor _contextAccessor;
    private readonly IWebHostEnvironment _webHostEnvironment;
    private List<string> _allowedExtensions = new() { ".jpg", ".jpeg", ".png" };
    private int _maxAllowedSize = 2097152;

    public ImageService(IHttpContextAccessor contextAccessor, IWebHostEnvironment webHostEnvironment)
    {
        _contextAccessor = contextAccessor;
        _webHostEnvironment = webHostEnvironment;
    }

    public async Task<string> UploadAsync(IFormFile image, string folderPath)
    {
        string imageName = Guid.NewGuid().ToString();
        var extension = Path.GetExtension(image.FileName);

        if (!_allowedExtensions.Contains(extension))
            throw new LogicException("( .jpg, .png, .jpeg ) Are Allowed Extensions.");

        if (image.Length > _maxAllowedSize)
            throw new LogicException("Max Size Is 2MB.");

        if (!Directory.Exists(Path.Combine($"{_webHostEnvironment.WebRootPath}", folderPath)))
            Directory.CreateDirectory(Path.Combine($"{_webHostEnvironment.WebRootPath}", folderPath));

        var imagePath = $"{folderPath}/{imageName}{extension}";
        var path = Path.Combine($"{_webHostEnvironment.WebRootPath}", imagePath);

        using var stream = File.Create(path);
        await image.CopyToAsync(stream);
        stream.Dispose();

        return imagePath;
    }

    public void Delete(string? imagePath)
    {
        if (imagePath == null)
            return;

        var oldImagePath = $"{_webHostEnvironment.WebRootPath}{imagePath}";

        if (File.Exists(oldImagePath))
            File.Delete(oldImagePath);
    }

    public bool IsPathExist(string? imagePath)
    {
        if (imagePath == null)
            return false;

        var oldImagePath = $"{_webHostEnvironment.WebRootPath}{imagePath}";

        if (File.Exists(oldImagePath))
            return true;

        return false;

    }

    public string? GetImageFullPath(string? imagePath)
    {
        if (imagePath == null)
            return null;

        var Url = _contextAccessor.HttpContext!.Request.GetDisplayUrl();
        Uri uri = new Uri(Url);

        string domainUrl = String.Concat(uri.Scheme, Uri.SchemeDelimiter, uri.Host, ":", uri.Port);
        return $"{domainUrl}/{imagePath}";
    }
}

