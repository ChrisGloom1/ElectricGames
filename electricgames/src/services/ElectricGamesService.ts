import axios from "axios";

const ElectricGamesService = (
  () =>{

    const endpoint = {
      characters: `https://localhost:7293/GameCharacter`
    } 

    const getAll = async () => {
      const r = await axios.get(endpoint.characters)
      return r.data;
    }

    const delCharById = async (id: number) => {
      const r = await axios.delete(`${endpoint.characters}/${id}`)
      console.log(r)
    }

    return{
      getAll, delCharById
    }
  } 
)();

export default ElectricGamesService;