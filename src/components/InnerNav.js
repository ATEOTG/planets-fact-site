import { NavLink, useNavigate, useLocation } from "react-router-dom";
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
              replace={true}
            >
              <div className={classes["inner-nav-text"]}>
                <p className={classes["inner-nav-number"]}>01</p>

                <p className={classes["inner-nav-heading"]}> OVERVIEW</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? props.activeClass : props.inactiveClass
              }
              to={`structure`}
            >
              <div className={classes["inner-nav-text"]}>
                <p className={classes["inner-nav-number"]}>02</p>

                <p className={classes["inner-nav-heading"]}>
                  INTERNAL STRUCTURE
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? props.activeClass : props.inactiveClass
              }
              to="surface"
            >
              <div className={classes["inner-nav-text"]}>
                <p className={classes["inner-nav-number"]}>03</p>

                <p className={classes["inner-nav-heading"]}>SURFACE GEOLOGY</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InnerNav;
