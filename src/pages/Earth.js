import { Route, Routes, Navigate } from "react-router-dom";
import InnerNav from "../components/InnerNav";
import NumericalInfo from "../components/NumericalInfo";
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

      <NumericalInfo
        rotation={"0.99 DAYS"}
        revolution={"365.26 DAYS"}
        radius={"6,371 KM"}
        temp={"16°C"}
      />
    </div>
  );
}

export default Earth;
