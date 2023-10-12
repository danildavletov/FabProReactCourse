import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import Button, {Button2} from "./components/Button";



function App() {
  return (
    <div className="container">

      <h1>Cats</h1>
      <Card foodVolume={2}/>
      <Card />
      <Card />
      <Card />
      
    </div>
  );
}

export default App;
