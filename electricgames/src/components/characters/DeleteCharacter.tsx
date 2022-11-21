import {useState, useContext, ChangeEvent} from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";

const DeleteCharacter = () => {

  const [id, setId] = useState<number>(0)
  const {characters, delCharacterById} = useContext(CharacterContext) as ICharacterContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.currentTarget.value))
  }

  const deleteCharacter = () => {
    delCharacterById(id)
  }


  return(
    <section className="container">
      <h3>Slett en karakter</h3>
      <p>Antall karakterer i databasen: {characters.length}</p>
      <div>
        <label>Oppgi ID for karakteren som skal slettes</label>
        <input type="number" onChange={handleChange} value={id} />
      </div>
      <button className="btn btn-danger" onClick={deleteCharacter}>Slett karakter</button>
    </section>
  )
}

export default DeleteCharacter;