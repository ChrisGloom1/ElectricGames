#nullable disable
using Microsoft.AspNetCore.Mvc;
namespace GameCharacterApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UploadImgController : ControllerBase
{
  private readonly IWebHostEnvironment hosting;
  public UploadImgController(IWebHostEnvironment _hosting)
  {
    hosting = _hosting;
  }
  [HttpPost]
  public IActionResult SaveImg(IFormFile file)
  {
    string wwwrootpath = hosting.WebRootPath;
    string absolutePath = Path.Combine($"{wwwrootpath}/uploaded-img/{file.FileName}");

    using (var fileStream = new FileStream(absolutePath, FileMode.Create))
    {
      file.CopyTo(fileStream);
    }
    return Ok();
  }
}