import classes from "./Header.module.css";
import bg from '../../images/wp.jpg'

function Header() {
    return (
      <div className={classes}>
        <div className={classes.headerTitles}>
          <span className={classes.headerTitleSm}>
            React & Node
          </span>
          <span className={classes.headerTitleLg}>
           Blog
          </span>
        </div>
            <img className = {classes.headerImg} src={bg} alt="" />
      </div>
    );
}


export default Header;
