#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GameCharacterApi.Models;
namespace GameCharacterApi.Controllers;

[ApiController]
[Route("[controller]")]
public class GameCharacterController : ControllerBase
{
  private readonly GameCharacterContext _context;
  public GameCharacterController(GameCharacterContext context)
  {
    _context = context;
  }
  [HttpGet]
  public async Task<ActionResult<List<GameCharacter>>> GetAllCharacters()
  {
    List<GameCharacter> allCharacters = await _context.GameCharacter.ToListAsync();
    return allCharacters;
  }
}