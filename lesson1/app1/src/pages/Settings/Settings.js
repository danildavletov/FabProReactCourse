import { Link } from "react-router-dom";

export default () => {
  return (
    <p>
      Этo страница настроек
      <Link to="/">Вернуться на главную</Link>
    </p>
  );
};
