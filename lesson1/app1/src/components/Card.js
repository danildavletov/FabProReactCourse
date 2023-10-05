import Button from '@mui/material/Button';

const Card = function () {
  return (
    <div className="card">
      <img
        src="https://media.moddb.com/images/groups/1/3/2392/cat.jpg"
        alt=""
        className="card__image"
      />
      <div className="card__description">
        <h2>Котик первый</h2>
        <p>asdsddsa</p>
        <Button variant="contained">Погладить кота</Button>
      </div>
    </div>
  );
};

export default Card;
