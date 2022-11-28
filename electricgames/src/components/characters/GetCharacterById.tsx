import { ChangeEvent, useState, useContext } from "react";
import CharacterItem from "./CharacterItem";
import ElectricGamesService from "../../services/ElectricGamesService";
import ICharacter from "../../interfaces/ICharacter";
import ICharacterContext from "../../interfaces/ICharacterContext";
import { CharacterContext } from "../../contexts/CharacterContext";


const GetCharacterById = () => {

  const {characters} = useContext(CharacterContext) as ICharacterContext;

  const [id, setId] = useState<number>(0);
  const [game, setGame] = useState<string>("")
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [gameCharacters, setGameCharacters] = useState<ICharacter[]>([]);
  const [isError, setError] = useState(false)
  
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
    switch(name){
      case "id":
        setId(parseInt(value))
        break;
      case "game":
        setGame(value)
        break;
    }
  }

  const getCharacter = async () => {
    try{
      const char = await ElectricGamesService.getCharById(id);
      setCharacter(char)  
      setError(false) 
      setGameCharacters([])
    }
    catch{
      setCharacter(null)
      setError(true)
    }  
  }

  const getChars = () => {
    const gameChars = characters.filter(chars => 
      chars.game.toLowerCase().indexOf(game.toLowerCase()) >= 0
    )
    setGameCharacters(gameChars);
    setCharacter(null)
    setError(false)
  }
  

  return (
    <>
    <section>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Id</span>
        </div>
        <input name="id" type="number" className="form-control" onChange={changeHandler} value={id} />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={getCharacter}>Hent karakter</button>
        </div>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Spill</span>
        </div>
        <input name="game" type="text" className="form-control" onChange={changeHandler} value={game} placeholder="Legend of Zelda"/>
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={getChars}>Hent karakter</button>
        </div>
      </div>

    </section >

    <section className="row gy-4 mt-2">
      {character != null && (
        <CharacterItem
          id={character.id}
          name={character.name}
          game={character.game}
          image={`https://localhost:7293/uploaded-img/${character.image}`}
        />
      )
    }
    {isError && (
      <p className="text-danger">ID ikke funnet.</p>
    )}

    <section className="row gy-4">
      {gameCharacters.map((char, i) => (
        <CharacterItem
          key={`c-${i}`}
          id={char.id}
          name={char.name}
          game={char.game}
          image={`https://localhost:7293/uploaded-img/${char.image}`}
        />
      ))}

    </section>
      
      
      </section>
    </>
  )
}

export default GetCharacterById;