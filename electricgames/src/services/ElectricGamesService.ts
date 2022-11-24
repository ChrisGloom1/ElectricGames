import axios from "axios";
import ICharacter from "../interfaces/ICharacter";

const ElectricGamesService = (
  () =>{

    const endpoints = {
      gameChar: "https://localhost:7293/GameCharacter",
      imgupload: "https://localhost:7293/UploadImg"
    }

    const getAll = async () => {
      const r = await axios.get(endpoints.gameChar)
      return r.data;
    }

    const getCharById = async (id: number) => {
      const r = await axios.get(`${endpoints.gameChar}/${id}`)
      return r.data;
    }

    const postChar = async (newChar: ICharacter) => {
      const r = await axios.post(endpoints.gameChar, newChar)
      return r.data;
    }

    const delCharById = async (id: number) => {
      const r = await axios.delete(`${endpoints.gameChar}/${id}`)
      return r.data;
    }

    const putChar = async (editedChar: ICharacter) => {
      try {
        const r = await axios.put(endpoints.gameChar, editedChar)
        return r.data;
      } 
      catch (error) {
        alert(error)
      }
    }

    const uploadImg = async (img: File) => {
      const formData = new FormData()
      formData.append("file", img)

      const r = await axios({
        url: endpoints.imgupload,
        method: "POST",
        data: formData,
        headers: {"Content-Type": "multiart/form-data"}
      });
      // formData.delete("file");
    }

    return{
      getAll, delCharById, putChar, getCharById, uploadImg, postChar
    }
  } 
)();

export default ElectricGamesService;