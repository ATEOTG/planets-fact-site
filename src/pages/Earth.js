import { Route, Routes, Navigate } from "react-router-dom";
import InnerNav from "../components/InnerNav";
import classes from "./Earth.module.css";

function Earth() {
  return (
    <div>
      <InnerNav
        activeClass={classes["earth-active"]}
        inactiveClass={classes["earth-inactive"]}
      />
      <Routes>
        <Route path="earth" to={<Navigate replace to="overview" />} />
      </Routes>
    </div>
  );
}

export default Earth;
