import classes from './Login.module.css';
import { Link } from 'react-router-dom';
import style from "../../components/Topbar/TopBar.module.css";

function Login() {
    return (
      <div className={classes.login}>
        <span className={classes.loginTitle}>
          Login
        </span>
        <form
          action=""
          className={classes.loginForm}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="E.g okpabicounsel@gmail.com"
            id="email"
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            id="password"
          />
          <button className={classes.loginButton}>
            Login
          </button>
        </form>
        <button
          className={classes.loginRegisterButton}
        >
          <Link
            to="/register"
            className={style.topLink}
          >
            Rgister
          </Link>
        </button>
      </div>
    );
}

export default Login;