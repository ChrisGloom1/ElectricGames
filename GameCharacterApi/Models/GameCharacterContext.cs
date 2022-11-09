#nullable disable
using Microsoft.EntityFrameworkCore;
namespace GameCharacterApi.Models;

public class GameCharacterContext : DbContext
{
  public GameCharacterContext(DbContextOptions<GameCharacterContext> options) : base(options) { }
  public DbSet<GameCharacterApi.Models.GameCharacter> GameCharacter { get; set; }
}