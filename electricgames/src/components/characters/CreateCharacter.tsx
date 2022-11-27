import {ChangeEvent, useState, useContext} from "react";
import {CharacterContext} from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";

const CreateCharacter = () => {

  const {uploadChar} = useContext(CharacterContext) as ICharacterContext

  const [name, setName] = useState<string>("")
  const [game, setGame] = useState<string>("")
  const [img, setImg] = useState<File | null>(null)

  const setImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target;
    if (files != null){
      const file = files[0];
      setImg(file)
    }
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
    switch (name){
      case "name":
        setName(value)
        break;
      case "game":
        setGame(value)
        break;
    }
  }

  return(
    <section>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Navn</span>
        </div>
        <input type="text" onChange={changeHandler} name="name" className="form-control"/>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Spill</span>
        </div>
        <input type="text" onChange={changeHandler} name="game" className="form-control"/>
      </div>
      <div>
        <label>Bilde</label>
        <input type="file" onChange={setImageHandler} name="image"/> 
      </div>
      <button onClick={ () => uploadChar(name, game, img)} className="btn btn-success mt-5">Last opp karakter</button>
    </section>
  )
}

export default CreateCharacter;