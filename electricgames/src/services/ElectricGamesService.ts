import axios from "axios";
import ICharacter from "../interfaces/ICharacter";

const ElectricGamesService = (
  () =>{

    const endpoint = "https://localhost:7293/GameCharacter"

    const getAll = async () => {
      const r = await axios.get(endpoint)
      return r.data;
    }

    const getCharById = async (id: number) => {
      const r = await axios.get(`${endpoint}/${id}`)
      return r.data;
    }

    const delCharById = async (id: number) => {
      const r = await axios.delete(`${endpoint}/${id}`)
    }

    const putChar = async (editedChar: ICharacter) => {
      try {
        const r = await axios.put(endpoint, editedChar)
      } 
      catch (error) {
        alert(error)
      }
    }

    const uploadImg = async (img: File) => {
      const formData = new FormData();
      formData.append("file", img)

      const r = await axios({
        url: endpoint,
        method: "POST",
        data: FormData,
        headers: {"Content-Type": "multiart/form-data"}
      })
    }

    return{
      getAll, delCharById, putChar, getCharById, uploadImg
    }
  } 
)();

export default ElectricGamesService;