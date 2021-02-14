const Comments = (props) => {
  //   console.log("comments props", props);
  //   if (props.hasComments) {
  //     console.log("the post has comments");
  //   } else {
  //     console.log("the post has no comments");
  //   }

  return (
    <div id="comments">
      {props.hasComments === true ? (
        <h3>The post has comments</h3>
      ) : (
        <h3>The post has no comments</h3>
      )}
    </div>
  );
};

export default Comments;
