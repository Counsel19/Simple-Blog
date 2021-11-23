import classes from "./Posts.module.css"
import Post from "../Post/Post"

function Posts() {
    return (
      <div className={classes.post}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
}

export default Posts;