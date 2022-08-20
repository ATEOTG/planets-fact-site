import classes from "./PlanetDisplayText.module.css";
import IconSource from "./svg/IconSource";

function PlanetDisplayText(props) {
  return (
    <div className={classes["display-text"]}>
      <h1>{props.header}</h1>
      <p className={classes.desc}>{props.description}</p>
      <div className={classes.source}>
        <p>Source : </p>
        <a href={props.source}>Wikipedia</a>
        <IconSource />
      </div>
    </div>
  );
}

export default PlanetDisplayText;
