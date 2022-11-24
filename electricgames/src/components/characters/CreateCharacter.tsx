import {ChangeEvent, useState} from "react";
import ElectricGamesService from "../../services/ElectricGamesService";

const CreateCharacter = () => {

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

  const uploadChar = async () => {
    const newChar = {name: name, game: game, image: img?.name}
    const r = ElectricGamesService.postChar(newChar)
    console.log(r);
    if (img != null){
      ElectricGamesService.uploadImg(img);
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

  const uploadImg = async () => {
    if (img != null){
      ElectricGamesService.uploadImg(img);
    }
  }

  return(
    <section>
      <div>
        <label>Navn</label>
        <input type="text" onChange={changeHandler} name="name"/>
      </div>
      <div>
        <label>Spill</label>
        <input type="text" onChange={changeHandler} name="game"/>
      </div>
      <div>
        <input type="file" onChange={setImageHandler}/> 
      </div>
      <button onClick={uploadChar}>Last opp karakter</button>
    </section>
  )
}

export default CreateCharacter;