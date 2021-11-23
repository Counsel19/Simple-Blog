import Sidebar from '../../components/Sidebar/Sidebar';
import classes from './Settings.module.css';
import PPic from '../../images/cloud3.jpg'
import { FaUserEdit } from "react-icons/fa";

function Settings() {
    return (
      <div className={classes.settings}>
        <div className={classes.settingsWrapper}>
          <div className={classes.settingsTitle}>
            <span
              className={
                classes.settingsUpdateTitle
              }
            >
              Update Your Account
            </span>
            <span
              className={
                classes.settingsDeleteTitle
              }
            >
              Delete Your Account
            </span>
          </div>
          <form className={classes.settingsForm}>
            <label>Profile Picture</label>
            <div className={classes.settingsPP}>
              <img src={PPic} alt="" />
              <label htmlFor="fileInput">
                <FaUserEdit
                  className={
                    classes.settingsPPIcon
                  }
                />
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
              />
            </div>
            <label htmlFor="username">
              UserName
            </label>
            <input
              type="text"
              placeholder="Counsel"
              id="username"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="okpabicounsel@gmail.com"
              id="email"
            />
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Counsel"
              id="password"
            />
            <button
              className={classes.settingsSubmit}
            >
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    );
}

export default Settings;