import classes from "./MobileDropdown.module.css";
import MobileDropdownItem from "./MobileDropdownItem";

function MobileDropdown(props) {
  return (
    <nav className={classes["dropdown-menu"]}>
      <ul className={classes["dropdown-list"]}>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/mercury/overview"}
            circleColor={"#DEF4FC"}
            planetName={"MERCURY"}
          />
        </li>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/venus/overview"}
            circleColor={"#F7CC7F"}
            planetName={"VENUS"}
          />
        </li>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/earth/overview"}
            circleColor={"#545BFE"}
            planetName={"EARTH"}
          />
        </li>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/mars/overview"}
            circleColor={"#FF6A45"}
            planetName={"MARS"}
          />
        </li>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/jupiter/overview"}
            circleColor={"#ECAD7A"}
            planetName={"JUPITER"}
          />
        </li>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/saturn/overview"}
            circleColor={"#FCCB6B"}
            planetName={"SATURN"}
          />
        </li>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/uranus/overview"}
            circleColor={"#65F0D5"}
            planetName={"URANUS"}
          />
        </li>
        <li>
          <MobileDropdownItem
            onClick={props.onMenuClick}
            path={"/planets-fact-site/neptune/overview"}
            circleColor={"#497EFA"}
            planetName={"NEPTUNE"}
          />
        </li>
      </ul>
    </nav>
  );
}

export default MobileDropdown;
