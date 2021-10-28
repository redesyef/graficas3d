import "./App.css";
import Prueba from "./components/Prueba";
import PlotWrapper from "./components/PlotWrapper.jsx";
import Graphs from "./components/Graphs";
import Point from "./components/Point";
import Linea from "./components/Linea3d";

function App() {
  return (
    <div className="App">
      <Linea />
      <Prueba />
      <Graphs />
      <Point />
    </div>
  );
}

export default App;
