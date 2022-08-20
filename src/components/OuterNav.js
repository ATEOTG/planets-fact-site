import { Link } from "react-router-dom";
import classes from "./OuterNav.module.css";

function OuterNav() {
  return (
    <div className={classes["outernav-cont"]}>
      <Link to="/mercury/overview" id={classes.mercury}>
        {" "}
        <div></div>
        MERCURY
      </Link>
      <Link to="/venus/overview" id={classes.venus}>
        <div></div>
        VENUS
      </Link>
      <Link to="/earth/overview" id={classes.earth}>
        <div></div>
        EARTH
      </Link>
      <Link to="/mars/overview" id={classes.mars}>
        <div></div>
        MARS
      </Link>
      <Link to="/jupiter/overview" id={classes.jupiter}>
        <div></div>
        JUPITER
      </Link>
      <Link to="/saturn/overview" id={classes.saturn}>
        <div></div>
        SATURN
      </Link>
      <Link to="/uranus/overview" id={classes.uranus}>
        <div></div>
        URANUS
      </Link>
      <Link to="/neptune/overview" id={classes.neptune}>
        <div></div>
        NEPTUNE
      </Link>
    </div>
  );
}

export default OuterNav;
