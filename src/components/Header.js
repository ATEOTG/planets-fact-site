import { useState } from "react";
import Menu from "./svg/Menu";
import classes from "./Header.module.css";
import MobileDropdown from "./Mobile/MobileDropdown";

function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function isMenuClickedHandler() {
    setIsMenuClicked((prevState) => !prevState);
  }
  return (
    <header className={classes["header-cont"]}>
      <nav className={`${classes["header-nav"]} ${"centered"}`}>
        <p className={classes.title}>THE PLANETS</p>
        <div className={classes.menu}>
          <Menu onMenuClick={isMenuClickedHandler} menuValid={isMenuClicked} />
        </div>
      </nav>
      {isMenuClicked && <MobileDropdown onMenuClick={isMenuClickedHandler} />}
    </header>
  );
}

export default Header;
