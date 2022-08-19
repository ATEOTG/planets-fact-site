import { Link } from "react-router-dom";
import IconChevron from "./svg/IconChevron";
import classes from "./MobileDropdownItem.module.css";

function MobileDropdownItem(props) {
  return (
    <Link to={props.path} className={classes.link} onClick={props.onClick}>
      <div className={classes["list-link"]}>
        <div>
          <div
            className={classes.circle}
            style={{ backgroundColor: `${props.circleColor}` }}
          ></div>
          <p className={classes["list-link-text"]}>{props.planetName}</p>
        </div>
        <IconChevron />
      </div>
    </Link>
  );
}

export default MobileDropdownItem;
