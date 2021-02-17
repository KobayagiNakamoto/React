const Cars = (props) => {
  return (
    <div id="Cars">
      {props.deets.map((details, index) => {
        return (
          <ul>
            <li key={index}>
              {details.brand}
              {details.model}
              {details.year}
              {details.plate.city}
              {details.plate.number}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Cars;
