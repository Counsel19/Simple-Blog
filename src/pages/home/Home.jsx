import classes from "./Home.module.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";

function Home() {
    return (
      <>
        <Header />
        <div className={classes.home}>
          <Posts />
          <Sidebar />
        </div>
      </>
    );
}

export default Home;