namespace GameCharacterApi.Interfaces;

interface IGameCharacter
{
  int Id { get; set; }
  string Name { get; set; }
  string Game { get; set; }
  string Image { get; set; }
}