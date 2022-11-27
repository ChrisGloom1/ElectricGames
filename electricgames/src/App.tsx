import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreatePage from "./pages/CreatePage";
import DeletePage from "./pages/DeletePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/shared/Navbar";
import GetCharacterPage from "./pages/GetCharacterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/HomePage" element={<HomePage />}></Route>
            <Route path="/GetCharacterPage" element={<GetCharacterPage />}></Route>
            <Route path="/CreatePage" element={<CreatePage />}></Route>
            <Route path="/EditPage" element={<EditPage />}></Route>
            <Route path="/DeletePage" element={<DeletePage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;