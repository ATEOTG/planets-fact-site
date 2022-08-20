import { Link } from "react-router-dom";
import classes from "./OuterNav.module.css";

function OuterNav() {
  return (
    <div className={classes["outernav-cont"]}>
      <Link to="/mercury/overview"> MERCURY</Link>
      <Link to="/venus/overview"> VENUS</Link>
      <Link to="/earth/overview"> EARTH</Link>
      <Link to="/mars/overview"> MARS</Link>
      <Link to="/jupiter/overview"> JUPITER</Link>
      <Link to="/saturn/overview"> SATURN</Link>
      <Link to="/uranus/overview"> URANUS</Link>
      <Link to="/neptune/overview"> NEPTUNE</Link>
    </div>
  );
}

export default OuterNav;
