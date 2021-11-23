import classes from "./Post.module.css";
import pImg from "../../images/im6.jpg"

function Post() {
    return (
      <div className={classes.post}>
        <img
          className={classes.postImg}
          src={pImg}
          alt=""
        />
        <div className={classes.postInfo}>
          <div className={classes.postCats}>
            <span className={classes.postCat}>
              Music
            </span>
            <span className={classes.postCat}>
              Life
            </span>
          </div>
          <span className={classes.postTitle}>
            Freelance Software Developer
          </span>
          <hr />
          <span className={classes.postDate}>
            1 hour ago
          </span>
          <p className={classes.postDesc}>
            Here’s a sample resume objective from
            a computer science major resume. It’s
            for those with no experience, or
            people changing careers. It’s
            engineered to stretch out those six
            precious seconds of coveted eye-time.
            Here’s a sample resume objective from
            a computer science major resume. It’s
            for those with no experience, or
            people changing careers. It’s
            engineered to stretch out those six
            precious seconds of coveted eye-time.
            Here’s a sample resume objective from
            a computer science major resume. It’s
            for those with no experience, or
            people changing careers. It’s
            engineered to stretch out those six
            precious seconds of coveted eye-time.
          </p>
        </div>
      </div>
    );
}

export default Post;