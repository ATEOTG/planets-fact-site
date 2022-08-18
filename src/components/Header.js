import Menu from "./svg/Menu";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes["header-cont"]}>
      <nav className={`${classes["header-nav"]} ${"centered"}`}>
        <p className={classes.title}>THE PLANETS</p>
        <Menu />
      </nav>
    </header>
  );
}

export default Header;
