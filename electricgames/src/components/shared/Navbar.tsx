import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <header>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">ElectricGames</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/HomePage" className="nav-link">Se alle</Link>
              </li>
              <li className="nav-item">
                <Link to="/CreatePage" className="nav-link">Opprett</Link>
              </li>
              <li className="nav-item">
                <Link to="/EditPage" className="nav-link">Oppdater</Link>
              </li>
              <li className="nav-item">
                <Link to="/DeleteCharacter" className="nav-link">Slett</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;