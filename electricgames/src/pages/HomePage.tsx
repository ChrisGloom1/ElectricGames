import CharacterList from "../components/characters/CharacterList";

const HomePage = () => {
  return(
    <section className="container mt-5">
      <h3 className="mb-4">Alle karakterer lagret i databasen</h3>
      <CharacterList/>
    </section>
  )
}

export default HomePage;