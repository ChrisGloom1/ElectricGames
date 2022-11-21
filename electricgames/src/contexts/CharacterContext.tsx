import {useEffect, useState, createContext, ReactNode} from "react";
import ICharacter from "../interfaces/ICharacter";
import ICharacterContext from "../interfaces/ICharacterContext";
import ElectricGamesService from "../services/ElectricGamesService";


export const CharacterContext = createContext<ICharacterContext | null>(null);

type Props = {
  children: ReactNode
}

const CharacterProvider = ({children} : Props) => {

  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect (()=>{
    getCharactersFromService();
  },[]);

  const getCharactersFromService = async () => {
    const characters = await ElectricGamesService.getAll()
    setCharacters(characters);
  }
  
  const delCharacterById = async (id: number) => {
    await ElectricGamesService.delCharById(id)
    const arr = characters.filter(char => char.id != id)
    setCharacters(arr);
  }

  return (
    <CharacterContext.Provider value={{characters, delCharacterById}}>
      {children}
    </CharacterContext.Provider>
  )

}

export default CharacterProvider;