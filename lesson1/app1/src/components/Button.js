export default (props) => {
    console.log(props);
  return (
    <a href="" className={props.customClassName} title={props.hint}>
      {props.children}
    </a>
  );
};

const Button2 = function () {
  return <a>Я вторая кнопка</a>;
};

export { Button2 };
