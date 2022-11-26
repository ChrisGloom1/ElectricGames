import CreateCharacter from "../components/characters/CreateCharacter";

const CreatePage = () => {
  return(
    <section className="mt-5">
      <h3 className="mb-4">Legg til en spillkarakter</h3>
      <p>Her kan du legge til spillkarakterer med navn, hvilket spill karakteren er fra og til og med legge til et bilde!</p>
      <CreateCharacter/>
    </section>
  )
}

export default CreatePage;