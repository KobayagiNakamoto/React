import Welcome from "./Welcome";
import Student from "./Student";
import Comments from "./Comments";

const App = () => {
  let name = "Samoil";
  let student = {
    firstname: "Ljubomir",
    lastname: "Jakimovski",
    indexnr: 2689,
  };
  return (
    <div id="app">
      <Welcome userName={name} />
      <Student info={student} />
      <Comments hasComments={false} />
    </div>
  );
};

export default App;
