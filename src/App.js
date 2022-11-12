import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Aldenir" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Aldenir"
        idade="23 anos"
        profissao="Dev"
        foto="http:/via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
