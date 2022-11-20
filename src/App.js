import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/empresa" element={<Empresa />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
