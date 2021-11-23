import classes from './Write.module.css';
import { MdAdd } from "react-icons/md";
import img from '../../images/bg.jpg';

function Write() {
    return (
      <div className={classes.write}>
          <img src={img} alt="" className={classes.image} />
        <form className={classes.writeForm}>
          <div className={classes.writeFormGroup}>
            <label htmlFor="fileInput">
              <MdAdd
                className={classes.writeIcon}
              />
            </label>
            <input
              type="file"
              id="fileInput"
              className={classes.fileInput}
            />
            <input
              type="text"
              placeholder="Title"
              className={classes.writeInput}
              autoFocus={true}
            />
          </div>
          <div className={classes.writeFormGroup}>
            <textarea
              placeholder="Write your story..."
              type="text"
              className={
                classes.writeText
              }
            ></textarea>
          </div>
          <button className={classes.writeSubmit}>
            Publish
          </button>
        </form>
      </div>
    );
}

export default Write;