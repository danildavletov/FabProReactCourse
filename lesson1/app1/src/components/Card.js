import Button from "@mui/material/Button";
import imgDefaultCat from "../assets/img/default-cat.jpg";

const Card = function (props) {
  const food = props.foodVolume ? props.foodVolume : "";

  return (
    <div className="card">
      <img
        src={props.image ? props.image : imgDefaultCat}
        alt={props.name}
        className="card__image"
      />
      <div className="card__description">
        <h2>{props.name}</h2>
        {food ? <p>Котик кушает {food}кг</p> : ""}

        <Button variant="contained">Погладить кота</Button>
      </div>
    </div>
  );
};

export default Card;
