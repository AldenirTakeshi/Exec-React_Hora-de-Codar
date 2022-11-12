import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Frase from "./components/Frase";

function App() {
  const name = "Matheus";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url =
    "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_logo.svg";

  return (
    <div className="App">
      <h2>Alterando jsx</h2>
      <p>Olá, {newName}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
      <Frase />
    </div>
  );
}

export default App;
