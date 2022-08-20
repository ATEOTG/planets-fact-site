import classes from "./NotFound.module.css";

function NotFound() {
  return (
    <div className="centered">
      <h1 className={classes["not-found"]}>Page Not Found!</h1>;
    </div>
  );
}

export default NotFound;
