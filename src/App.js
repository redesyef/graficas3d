import "./App.css";
import Prueba from "./components/Prueba";
import PlotWrapper from "./components/PlotWrapper.jsx";
import Graphs from "./components/Graphs";
import Point from "./components/Point";
import Linea from "./components/Linea3d";
import Line from "./components/Line";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      <New />
      <Linea />
      <Line />
      <Prueba />
      <Graphs />
      <Point />
    </div>
  );
}

export default App;
