import classes from "./PlanetDisplay.module.css";
import IconSource from "./svg/IconSource";

function PlanetDisplay(props) {
  const surfaceDisplay = props.isSurface;
  return (
    <div className={`${classes["planet-display-cont"]} ${"centered"}`}>
      <img
        className={classes["planet-img"]}
        src={props.image}
        alt="image of planet earth"
      />
      <div className={classes["surface-display"]}>
        {surfaceDisplay && (
          <img
            className={classes["surface-img"]}
            src={props.surfaceImage}
            alt="earth surface"
          />
        )}
      </div>
      <div className={classes["display-text"]}>
        <h1>{props.header}</h1>
        <p>{props.description}</p>
        <div className={classes.source}>
          <p>Source : </p>
          <a href={props.source}>Wikipedia</a>
          <IconSource />
        </div>
      </div>
    </div>
  );
}

export default PlanetDisplay;
