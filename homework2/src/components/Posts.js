// import Comments from "./Comments";

// const Posts = (props) =>
//   props.info.map((post) => (
//     <div>
//       <p>{post.title}</p>
//       <p>{post.body}</p>

//       <Comments commentInfo={post.comments} />
//     </div>
//   ));

// export default Posts;

const Posts = (props) => {
  return (
    <div id="Posts">
      <ul>
        {props.info.map(({ userId, id, title, body, comments }, index) => {
          return (
            <ul key={index}>
              <div>User ID: {userId}</div>
              <div>ID: {id}</div>
              <div>Title: {title}</div>
              <div>Body: {body}</div>
              <div>
                {comments.map(({ postId, id, name, email, body }, index) => (
                  <p key={index}>
                    <div>Post ID: {postId}</div>
                    <div>ID: {id}</div>
                    <div>Name: {name}</div>
                    <div>Email: {email}</div>
                    <div>Body: {body}</div>
                  </p>
                ))}
              </div>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
