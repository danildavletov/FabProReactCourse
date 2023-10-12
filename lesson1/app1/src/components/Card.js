import Button from '@mui/material/Button';

const Card = function (props) {
  const food = props.foodVolume ? props.foodVolume : "";
  
  return (
    <div className="card">
      <img
        src="https://media.moddb.com/images/groups/1/3/2392/cat.jpg"
        alt=""
        className="card__image"
      />
      <div className="card__description">
        <h2>Котик первый</h2>
        {food ? (
          <p>Котик кушает {food}кг</p>
        ) : "" }

        <Button variant="contained">Погладить кота</Button>
      </div>
    </div>
  );
};

export default Card;
