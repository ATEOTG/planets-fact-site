import Menu from "./svg/Menu";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes["header-cont"]}>
      <div className={`${classes["header-nav"]} ${"centered"}`}>
        <p className={classes.title}>THE PLANETS</p>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
