const Comments = (props) => {
  return (
    <div id="Cars">
      {props.details.map((info, index) => {
        return (
          <ul>
            <li key={index}>
              {info.name}
              {info.email}
              {info.body}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Comments;
