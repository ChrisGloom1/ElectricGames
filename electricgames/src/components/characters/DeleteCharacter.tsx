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
    <section>  
      <p>Antall karakterer i databasen: {characters.length}</p>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Oppgi ID for karakteren som skal slettes</span>
        </div>
          <input type="number" className="form-control" onChange={handleChange} value={id} />
      </div>
      <button className="btn btn-danger mt-5" onClick={deleteCharacter}>Slett karakter</button>
    </section>
  )
}

export default DeleteCharacter;