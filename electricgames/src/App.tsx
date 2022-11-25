import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreatePage from "./pages/CreatePage";
import DeleteCharacter from "./components/characters/DeleteCharacter";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/HomePage" element={<HomePage />}></Route>
            <Route path="/CreatePage" element={<CreatePage />}></Route>
            <Route path="/EditPage" element={<EditPage />}></Route>
            <Route path="/DeleteCharacter" element={<DeleteCharacter />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;