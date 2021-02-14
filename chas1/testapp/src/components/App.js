import React from "react";
import App2 from "./App2";

// class App extends React.Component {
//   render() {
//     return <h2>Hellow from component</h2>;
//   }
// }

const App = () => {
  let name = "My name is Dolph Lundgren";
  let a = 32;
  let b = 43;
  let sum = a + b;

  return (
    <div>
      <h2>Goodbye World! {name}</h2>
      <span>The sum is {sum}</span>
      <App2 />
    </div>
  );
};

export default App;
