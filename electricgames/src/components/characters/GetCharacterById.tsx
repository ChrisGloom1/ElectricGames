import { ChangeEvent, useContext, useState } from "react";
import CharacterItem from "./CharacterItem";
import ElectricGamesService from "../../services/ElectricGamesService";
import ICharacter from "../../interfaces/ICharacter";

const GetCharacterById = () => {

  const [id, setId] = useState<number>(0);
  const [character, setCharacter] = useState<ICharacter[]>([]);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.currentTarget.value))
  }

  const getCharacter = async () => {
    const char = await ElectricGamesService.getCharById(id);
    setCharacter(char)
  }

  // const displayChar = () => {
  //   return (
  //       <CharacterItem
  //         id={character.id}
  //         name={character.name}
  //         game={character.game}
  //         image={`https://localhost:7293/uploaded-img/${character.image}`}
  //       />
  // )}

  return (
    <>
    <section>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Oppgi ID for karakteren som skal hentes</span>
          </div>
          <input type="number" className="form-control" onChange={handleChange} value={id} />
        </div>
        <button className="btn btn-primary mt-5" onClick={getCharacter}>Hent karakter</button>
      </section>

      <section className="row"></section>
    </>
  )
}

export default GetCharacterById;