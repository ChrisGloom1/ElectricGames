import {useContext} from "react";
import ICharacterContext from "../../interfaces/ICharacterContext";
import { CharacterContext } from "../../contexts/CharacterContext";
import CharacterItem from "./CharacterItem";

const CharacterList = () => {

  const {characters} = useContext(CharacterContext) as ICharacterContext;

  const getCharacterItems = () => {
    return characters.map((character, i) => (
      <CharacterItem
        key={`c-${i}`}
        id={character.id}
        name={character.name}
        game={character.game}
        image={`https://localhost:7293/uploaded-img/${character.image}`}
      />
    ));
  }

  return(
    <section className="row gy-4">{getCharacterItems()}</section>
  )
}

export default CharacterList;