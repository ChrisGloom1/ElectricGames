import GetCharacterById from "../components/characters/GetCharacterById";

const GetCharacterPage = () => {
  return(
    <section className="mt-5">
      <h3 className="mb-5">Hent ut karakterer</h3>
      <GetCharacterById/>
    </section>
  )
}

export default GetCharacterPage;