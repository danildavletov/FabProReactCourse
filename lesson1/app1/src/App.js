import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">

      <h1>Cats</h1>
      <Button>Кнопка</Button>
      <Card />
      <Card />
      <Card />
      <Card />
      
    </div>
  );
}

export default App;
