import {useState, ChangeEvent} from "react";
import ElectricGamesService from "../../services/ElectricGamesService";

const EditCharacter = () => {

  const [id, setId] = useState<string>("id ikke satt")
  const [name, setName] = useState<string>("navn ikke satt")
  const [game, setGame] = useState<string>("spill ikke satt")
  // const [img, setImg] = useState<File|null>(null)

  const getCharFromService = async () => {
    const char = await ElectricGamesService.getCharById(parseInt(id));
    setName(char.name);
    setGame(char.game);
    // setImg(char.image);
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

  // const setImgHandler = (e:ChangeEvent<HTMLInputElement>) => {
  //   if (img != null){
  //     ElectricGamesService.uploadImg(img)
  //   }
  // }

  const editChar = () => {
    const editedChar = {
      id: parseInt(id),
      name: name,
      game: game,
      // image: img.toString()
    };
    // ElectricGamesService.putChar(editedChar)
  }

  return(
    <section className="container">
      <div>
        <label>Id</label>
        <input name="id" onChange={changeHandler} type="string" value={id} />
        <button className="btn btn-primary" onClick={getCharFromService}>Hent Karakter</button>
      </div>
      <div>
        <label>Navn</label>
        <input name="name" onChange={changeHandler} type="text" value={name} />
      </div>
      <div>
        <label>Spill</label>
        <input name="game" onChange={changeHandler} type="text" value={game} />
      </div>
      {/* <div>
        <label>Bilde</label>
        <input onChange={setImgHandler} type="file" />
      </div> */}
    </section>
  )
}

export default EditCharacter;