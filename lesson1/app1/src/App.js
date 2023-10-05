import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <h1>Cats</h1>
      <div className="card">
          <img
            src="https://media.moddb.com/images/groups/1/3/2392/cat.jpg"
            alt=""
            className="card__image"
          />
          <div className="card__description">
            <h2>Котик первый</h2>
            <p>asdsddsa</p>
          </div>
      </div>
      <div className="card">
          <img
            src="https://media.moddb.com/images/groups/1/3/2392/cat.jpg"
            alt=""
            className="card__image"
          />
          <div className="card__description">
            <h2>Котик</h2>
            <p>asdsddsa</p>
          </div>
      </div>
    </div>
  );
}

export default App;
