import classes from "./PlanetDisplayImg.module.css";

function PlanetDisplayImg(props) {
  const surfaceDisplay = props.isSurface;
  return (
    <div className={classes["img-displays"]}>
      <img
        className={classes["planet-img"]}
        src={props.image}
        alt={`planet ${props.header}`}
      />
      <div className={classes["surface-display"]}>
        {surfaceDisplay && (
          <img
            className={classes["surface-img"]}
            src={props.surfaceImage}
            alt={`${props.header}'s surface`}
          />
        )}
      </div>
    </div>
  );
}

export default PlanetDisplayImg;
