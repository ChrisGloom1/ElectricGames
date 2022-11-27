import ICharacter from "./ICharacter";

interface ICharacterContext{
  characters: ICharacter[];
  delCharacterById: (id:number) => void;
  uploadChar: (name: string, game: string, img: File | null) => void;
  getCharactersFromService: () => void;
}

export default ICharacterContext;