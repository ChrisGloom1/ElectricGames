import ICharacter from "./ICharacter";

interface ICharacterContext{
  characters: ICharacter[];
  delCharacterById: (id:number) => void;
}

export default ICharacterContext;