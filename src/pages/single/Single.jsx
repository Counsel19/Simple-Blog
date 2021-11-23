import classes from "./Single.module.css";
import Sidebar  from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

function Single() {
    return (
        <div className={classes.single}>
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single;