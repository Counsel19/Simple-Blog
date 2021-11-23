import classes from "./Sidebar.module.css";
import aboutMe from "../../images/img14.jpg"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

function Sidebar() {
    return (
      <div className={classes.sidebar}>
        <div className={classes.sidebarItem}>
          <span className={classes.sidebarTitle}>
            ABOUT ME
          </span>
          <img
            className={classes.sidebarImg}
            src={aboutMe}
            alt="More about me"
          />
          <p>
            The computing filed is young and very
            broad. This is in sharp contrast to
            the medical and accounting fields. It
            is also very malleable i.e. it is used
            in many domains teaching, engineering,
            librarians etc.
          </p>
        </div>
        <div className={classes.sidebarItem}>
          <span className={classes.sidebarTitle}>
            CATEGORIES
          </span>
          <ul className={classes.sidebarList}>
            <li
              className={classes.sidebarListItem}
            >
              Life
            </li>
            <li
              className={classes.sidebarListItem}
            >
              Music
            </li>
            <li
              className={classes.sidebarListItem}
            >
              Lifestyle
            </li>
            <li
              className={classes.sidebarListItem}
            >
              Tech
            </li>
            <li
              className={classes.sidebarListItem}
            >
              Cinema
            </li>
            <li
              className={classes.sidebarListItem}
            >
              Education
            </li>
          </ul>
        </div>

        <div className={classes.sidebarItem}>
          <span className={classes.sidebarTitle}>
            FOLLOW US
          </span>
          <div className={classes.sidebarSocial}>
            <FaFacebookSquare
              className={classes.sidebarIcon}
            />
            <FaTwitterSquare
              className={classes.sidebarIcon}
            />
            <FaInstagramSquare
              className={classes.sidebarIcon}
            />
            <FaPinterestSquare
              className={classes.sidebarIcon}
            />
          </div>
        </div>
      </div>
    );
}

export default Sidebar;