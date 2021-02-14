import Car from "./Car";

const App = () => {
  let car1 = {
    type: "Peugeout",
    model: "206",
    color: "Gray",
    doors: 4,
    hatchback: true,
  };
  let car2 = {
    type: "Mercedes",
    model: "E350",
    color: "Black",
    doors: 4,
    hatchback: false,
  };
  let car3 = {
    type: "Honda",
    model: "Civic",
    color: "RED",
    doors: 4,
    hatchback: true,
  };
  return (
    <div id="Carmodel">
      <Car carInfo={car1} />
      <Car carInfo={car2} />
      <Car carInfo={car3} />
    </div>
  );
};

export default App;
