import { NavLink } from "react-router-dom";
import classes from "./InnerNav.module.css";

function InnerNav(props) {
  return (
    <div className={classes["inner-nav-cont"]}>
      <nav className={`${classes["inner-nav"]} ${"centered"}`}>
        <ul>
          <li>
            {" "}
            <NavLink
              className={(navData) =>
                navData.isActive ? props.activeClass : props.inactiveClass
              }
              to="overview"
            >
              {" "}
              OVERVIEW
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? props.activeClass : props.inactiveClass
              }
              to="structure"
            >
              {" "}
              STRUCTURE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? props.activeClass : props.inactiveClass
              }
              to="surface"
            >
              {" "}
              SURFACE
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InnerNav;
