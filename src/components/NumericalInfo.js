import classes from "./NumericalInfo.module.css";

function NumericalInfo(props) {
  return (
    <div className={`${classes["info-cont"]}`}>
      <div className={classes.info}>
        <p className={classes["info-desc"]}>ROTATION TIME</p>
        <p className={classes["info-number"]}>{props.rotation}</p>
      </div>
      <div className={classes.info}>
        <p className={classes["info-desc"]}>REVOLUTION TIME</p>
        <p className={classes["info-number"]}>{props.revolution}</p>
      </div>
      <div className={classes.info}>
        <p className={classes["info-desc"]}>RADIUS</p>
        <p className={classes["info-number"]}>{props.radius}</p>
      </div>
      <div className={classes.info}>
        <p className={classes["info-desc"]}>AVERAGE TEMP.</p>
        <p className={classes["info-number"]}>{props.temp}</p>
      </div>
    </div>
  );
}

export default NumericalInfo;
