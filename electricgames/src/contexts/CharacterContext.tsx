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
    getCharactersFromService();
  }

  const uploadChar = async (name: string, game: string, img: File | null) => {
    const newChar = {name: name, game: game, image: img?.name}
    await ElectricGamesService.postChar(newChar)
    if (img != null){
      await ElectricGamesService.uploadImg(img);
    }
    getCharactersFromService();
  }

  return (
    <CharacterContext.Provider value={{characters, delCharacterById, uploadChar, getCharactersFromService}}>
      {children}
    </CharacterContext.Provider>
  )

}

export default CharacterProvider;