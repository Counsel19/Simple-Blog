import classes from './Register.module.css';
import { Link } from 'react-router-dom';
import style from '../../components/Topbar/TopBar.module.css'

function Register() {
    return (
      <div className={classes.register}>
        <span className={classes.registerTitle}>
          Register
        </span>
        <form
          action=""
          className={classes.registerForm}
        >
          <label htmlFor="username">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
          />
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
          <button
            className={classes.registerButton}
          >
            Register
          </button>
        </form>
        <button
          className={classes.registerLoginButton}
        >
          <Link
            to="/login"
            className={style.topLink}
          >
            Login
          </Link>
        </button>
      </div>
    );
}

export default Register;