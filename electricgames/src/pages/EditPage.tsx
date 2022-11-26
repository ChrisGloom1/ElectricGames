import EditCharacter from "../components/characters/EditCharacter";

const EditPage = () => {

  return(
    <section className="mt-5">
      <h3 className="mb-4">Oppdater en karakter</h3>
      <p>Ta tak i en ID, klikk på "hent" karakter for å få opp info i tekstfeltene. Dersom du ikke laster opp et bilde vil bildet på karakteren bli tomt.</p>
      <EditCharacter/>
    </section>
  )
}

export default EditPage;