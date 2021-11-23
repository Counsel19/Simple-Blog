import classes from "./TopBar.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
} from "react-icons/fa";
import image from "../../images/tech.jpg";
import { Link } from "react-router-dom";

function TopBar() {
  const user = true;

  return (
    <div className={classes.top}>
      <div className={classes.topLeft}>
        <FaFacebookSquare
          className={classes.topIcon}
        />
        <FaTwitterSquare
          className={classes.topIcon}
        />
        <FaInstagramSquare
          className={classes.topIcon}
        />
        <FaPinterestSquare
          className={classes.topIcon}
        />
      </div>
      <div className={classes.topCenter}>
        <ul className={classes.topList}>
          <li className={classes.topListItem}>
            <Link
              to="/"
              className={classes.topLink}
            >
              HOME
            </Link>
          </li>
          <li className={classes.topListItem}>
            <Link
              to="/"
              className={classes.topLink}
            >
              ABOUT
            </Link>
          </li>
          <li className={classes.topListItem}>
            <Link
              to="/"
              className={classes.topLink}
            >
              CONTACT
            </Link>
          </li>
          <li className={classes.topListItem}>
            <Link
              to="/write"
              className={classes.topLink}
            >
              {user && "WRITE"}
            </Link>
          </li>
          <li className={classes.topListItem}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className={classes.topRight}>
        {user ? (
          <img
            className={classes.topImg}
            src={image}
            alt="logo"
          />
        ) : (
          <ul className={classes.topList}>
            <li className={classes.topListItem}>
              <Link
                to="/login"
                className={classes.topLink}
              >
                LOGIN
              </Link>
            </li>
            <li className={classes.topListItem}>
              <Link
                to="/register"
                className={classes.topLink}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <FaSearch
          className={classes.topSearchIcon}
        />
      </div>
    </div>
  );
}

export default TopBar;
