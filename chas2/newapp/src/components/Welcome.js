const WelcomeName = (props) => {
  console.log("welcome props", props);

  return <h3>Welcome {props.userName}</h3>;
};

export default WelcomeName;
