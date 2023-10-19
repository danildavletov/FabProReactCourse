import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import Button, { Button2 } from "./components/Button";
import { TextField } from "@mui/material";

import imgCat1 from "./assets/img/cat1.jpg";

let catsInitial = [
  {
    name: "Кеша",
    consumption: 2,
    image: imgCat1
  },
  { name: "Рыжик" },
  { name: "Пыжик" },
  {
    name: "Мурка",
    consumption: 1,
    image: "https://w.forfun.com/fetch/5c/5c440772f54fc8f40bc80a130eb18565.jpeg"
  },
];

function App() {
  const [cats, setCats] = useState(catsInitial);
  const [filteredCats, setFilteredCats] = useState(catsInitial);

  const handleClick = (element) => {
    element.preventDefault();
    setCats([{ name: "Новый кот без имени" }, ...cats]);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let filter = cats.filter((cat) => cat.name.includes(value));
    setFilteredCats(filter);
  };
  return (
    <div className="container">
      <h1>Cats</h1>

      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Фильтр котов"
        variant="outlined"
      />

      {filteredCats.map((cat) => (
        <Card name={cat.name} foodVolume={cat.consumption} image={cat.image}/>
      ))}

      <button onClick={handleClick}>Добавить котов</button>
    </div>
  );
}

export default App;
