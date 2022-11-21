#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GameCharacterApi.Models;
namespace GameCharacterApi.Controllers;

[ApiController]
[Route("[controller]")]
public class GameCharacterController : ControllerBase
{
  private readonly GameCharacterContext context;
  public GameCharacterController(GameCharacterContext _context)
  {
    context = _context;
  }

  [HttpGet]
  public async Task<ActionResult<List<GameCharacter>>> GetAllCharacters()
  {
    List<GameCharacter> allCharacters = await context.GameCharacter.ToListAsync();
    return allCharacters;
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<GameCharacter>> Get(int id)
  {
    GameCharacter? character = await context.GameCharacter.FindAsync(id);

    if (character != null)
    {
      return Ok(character);
    }
    else
    {
      return NotFound();
    }
  }

  [HttpPut]
  public IActionResult Put(GameCharacter editedChar)
  {
    context.Entry(editedChar).State = EntityState.Modified;
    context.SaveChangesAsync();
    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(int Id)
  {
    try
    {
      GameCharacter charToDel = await context.GameCharacter.FindAsync(Id);
      if (charToDel != null)
      {
        context.GameCharacter.Remove(charToDel);
        await context.SaveChangesAsync();
        return NoContent();
      }
      else
      {
        return NotFound();
      }
    }
    catch
    {
      return StatusCode(500);
    }
  }

}

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