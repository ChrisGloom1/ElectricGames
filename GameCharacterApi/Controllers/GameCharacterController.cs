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