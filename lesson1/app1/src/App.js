import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import Button, {Button2} from "./components/Button";



function App() {
  return (
    <div className="container">

      <h1>Cats</h1>
      <Button hint="Нажми меня" customClassName="btn-primary">
        <i>sdfhgsd</i>
      </Button>
      <Card />
      <Card />
      <Card />
      <Card />
      
    </div>
  );
}

export default App;
