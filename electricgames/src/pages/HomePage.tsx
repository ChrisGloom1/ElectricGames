import CharacterList from "../components/characters/CharacterList";

const HomePage = () => {
  return(
    <section className="container">
      <h3>Alle karakterer lagret i databasen</h3>
      <CharacterList/>
    </section>
  )
}

export default HomePage;