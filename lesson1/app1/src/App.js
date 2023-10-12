import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import Button, { Button2 } from "./components/Button";


let catsInitial = [
  {
    name: "Кеша",
    consumption: 2,
  },
  {name: "Рыжик"},
  {name: "Мурка",consumption: 1},
];

function App() {
  const [cats, setCats] = useState(catsInitial);

  const handleClick = (e) => {
    e.preventDefault();
    setCats([
      {name: "Новый кот без имени"}
    ]);
  };
  return (
    <div className="container">
      <h1>Cats</h1>

      {cats.map((cat) => (
        <Card name={cat.name} foodVolume={cat.consumption} />
      ))}
      <button onClick={handleClick}>Добавить котов</button>
      <br />
      <br />
    </div>
  );
}

export default App;
