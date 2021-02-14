const Student = (props) => {
  console.log(props);
  return (
    <div id="student">
      <h1>Student info:</h1>
      <p>First name: {props.info.firstname}</p>
      <p>Last name: {props.info.lastname}</p>
      <p>Indexnr: {props.info.indexnr}</p>
    </div>
  );
};

export default Student;
