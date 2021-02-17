const Licenses = (props) => {
  return (
    <div id="licenses">
      <ul>
        {props.info.map((licenseplate, index) => {
          return (
            <li key={index}>
              {licenseplate.city}
              {licenseplate.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Licenses;
