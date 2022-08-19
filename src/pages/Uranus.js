import { Route, Routes, Navigate } from "react-router-dom";
import classes from "./Uranus.module.css";
import InnerNav from "../components/InnerNav";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplay from "../components/PlanetDisplay";
import planetUranus from "../assets/planet-uranus.svg";
import planetUranusInternal from "../assets/planet-uranus-internal.svg";
import uranusGeology from "../assets/geology-uranus.png";

function Uranus() {
  return (
    <div className="page-cont">
      <InnerNav
        activeClass={classes["uranus-active"]}
        inactiveClass={classes["uranus-inactive"]}
      />
      <Routes>
        {/* <Route path="earth" to={<Navigate replace to="overview" />} /> */}
        <Route
          path="overview"
          element={
            <PlanetDisplay
              image={planetUranus}
              header={"URANUS"}
              description={`Uranus is the seventh planet from the Sun. Its name is a reference to the 
              Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather 
              of Ares. It has the third-largest planetary radius and fourth-largest planetary 
              mass in the Solar System.`}
              source={"https://en.wikipedia.org/wiki/Uranus"}
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetDisplay
              image={planetUranusInternal}
              header={"URANUS"}
              description={`The standard model of Uranus's structure is that it consists of three layers: a 
              rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and 
              an outer gaseous hydrogen/helium envelope. The core is relatively small, with a 
              mass of only 0.55 Earth masses.`}
              source={"https://en.wikipedia.org/wiki/Uranus#Internal_structure"}
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetDisplay
              image={planetUranus}
              isSurface={true}
              surfaceImage={uranusGeology}
              header={"URANUS"}
              description={` The composition of Uranus's atmosphere is different from its bulk, consisting mainly 
              of molecular hydrogen and helium. The helium molar fraction, i.e. the number of 
              helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.
            `}
              source={"https://en.wikipedia.org/wiki/Uranus#Atmosphere"}
            />
          }
        />
      </Routes>

      <NumericalInfo
        rotation={"17.2 HOURS"}
        revolution={"84 YEARS"}
        radius={"25,362 KM"}
        temp={"-195°C"}
      />
    </div>
  );
}

export default Uranus;