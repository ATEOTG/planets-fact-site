import { Link } from "react-router-dom";
import IconChevron from "./svg/IconChevron";
import classes from "./MobileDropdown.module.css";

function MobileDropdown(props) {
  return (
    <nav className={classes["dropdown-menu"]}>
      <ul className={classes["dropdown-list"]}>
        <li>
          <Link
            to="/mercury/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#DEF4FC" }}
                ></div>
                <p className={classes["list-link-text"]}>MERCURY</p>
              </div>
              <IconChevron />
            </div>
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/venus/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            {" "}
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#F7CC7F" }}
                ></div>
                <p className={classes["list-link-text"]}>VENUS</p>
              </div>
              <IconChevron />
            </div>
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/earth/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            {" "}
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#545BFE" }}
                ></div>
                <p className={classes["list-link-text"]}>EARTH</p>
              </div>
              <IconChevron />
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/mars/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            {" "}
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#FF6A45" }}
                ></div>
                <p className={classes["list-link-text"]}>MARS</p>
              </div>
              <IconChevron />
            </div>
          </Link>{" "}
        </li>
        <li>
          <Link
            to="/jupiter/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            {" "}
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#ECAD7A" }}
                ></div>
                <p className={classes["list-link-text"]}>JUPITER</p>
              </div>
              <IconChevron />
            </div>
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="/saturn/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            {" "}
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#FCCB6B" }}
                ></div>
                <p className={classes["list-link-text"]}>SATURN</p>
              </div>
              <IconChevron />
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/uranus/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            {" "}
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#65F0D5" }}
                ></div>
                <p className={classes["list-link-text"]}>URANUS</p>
              </div>
              <IconChevron />
            </div>
          </Link>{" "}
        </li>
        <li>
          <Link
            to="/neptune/overview"
            className={classes.link}
            onClick={props.onMenuClick}
          >
            {" "}
            <div className={classes["list-link"]}>
              <div>
                <div
                  className={classes.circle}
                  style={{ "background-color": "#497EFA" }}
                ></div>
                <p className={classes["list-link-text"]}>NEPTUNE</p>
              </div>
              <IconChevron />
            </div>
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default MobileDropdown;
