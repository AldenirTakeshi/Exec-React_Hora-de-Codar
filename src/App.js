import "./App.css";
import Form from "./components/Form";
import Evento from "./components/Evento";
function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
    </div>
  );
}

export default App;
