const Fruits = (props) => {
  return (
    <div id="fruits">
      <ul>
        {props.fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default Fruits;