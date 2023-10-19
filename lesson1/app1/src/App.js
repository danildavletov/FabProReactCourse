import { useEffect, useState,useRef } from "react";
import "./App.scss";
import Card from "./components/Card";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

import imgCat1 from "./assets/img/cat1.jpg";
import AddIcon from '@mui/icons-material/Add';
import Form from "./components/Form/Form";

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
  const [filteredCats, setFilteredCats] = useState(cats);

  const searchCatRef = useRef();

  const handleClick = (element) => {
    element.preventDefault();
    setCats([{ name: "Новый кот без имени" }, ...cats]);
  };
  const handleChange = (e) => {
    applyFilter(searchCatRef.current.value)
  };
  const applyFilter = (value = "")=>{
    let filtered = cats.filter((cat) => cat.name.includes(value));
    setFilteredCats(filtered);
  }
  useEffect(()=>{
    console.log("Котик добавлен");
    applyFilter(searchCatRef.current.value);
  },[cats]);
  return (
    <div className="container">
      <h1>Cats</h1>

      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Фильтр котов"
        variant="outlined"
        inputRef={searchCatRef}
        margin="normal"
        fullWidth 

      />

      <Form/>

      {filteredCats.map((cat) => (
        <Card name={cat.name} foodVolume={cat.consumption} image={cat.image}/>
      ))}
      <Button variant="contained" color="success" size="large" startIcon={<AddIcon/>}  onClick={handleClick}>Добавить котов</Button>
    </div>
  );
}

export default App;
