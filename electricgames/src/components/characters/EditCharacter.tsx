import {useState, ChangeEvent} from "react";
import ElectricGamesService from "../../services/ElectricGamesService";

const EditCharacter = () => {

  const [id, setId] = useState<string>("Id ikke satt")
  const [name, setName] = useState<string>("Navn ikke satt")
  const [game, setGame] = useState<string>("Spill ikke satt")
  const [img, setImg] = useState<File | null>(null)

  const getCharFromService = async () => {
    const char = await ElectricGamesService.getCharById(parseInt(id));
    setName(char.name);
    setGame(char.game);
    
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
    switch (name){
      case "id":
        setId(value)
        break;
      case "name":
        setName(value)
        break;
      case "game":
        setGame(value)
        break;
    }
  }

  // Sette i context?
  const setImgHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target;
    if (files != null){
      const file = files[0];
      setImg(file)
    }
  }

  const editChar = () => {
    let editedChar;
    if (img != null){
      editedChar = {
        id: parseInt(id),
        name: name,
        game: game,
        image: img.name
      };
      ElectricGamesService.uploadImg(img);
    }
    else {
      editedChar = {
        id: parseInt(id),
        name: name,
        game: game
      };
    }
    ElectricGamesService.putChar(editedChar)
  }

  return(
    <section>
      <div className="input-group mb-5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Id</span>
        </div>
        <input type="string" name="id" className="form-control" onChange={changeHandler} value={id}/>
          <div className="input-group-append">
          <button className="btn btn-primary" onClick={getCharFromService}>Hent karakter</button>
        </div>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Navn</span>
        </div>
        <input type="text" onChange={changeHandler} name="name" className="form-control" value={name}/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Spill</span>
        </div>
        <input type="text" onChange={changeHandler} name="game" className="form-control" value={game}/>
      </div>
      <div>
        <label>Bilde</label>
        <input onChange={setImgHandler} type="file" />
      </div>
      <button name="image" className="btn btn-success mt-5" onClick={editChar}>Endre karakter</button>
    </section>
  )
}

export default EditCharacter;