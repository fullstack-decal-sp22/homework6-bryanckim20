import Comments from "./Comments"

const Post = ({ title, body, comments, postId }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments comments={comments} postID={postId}/> 
  </div>
}

export default Post;