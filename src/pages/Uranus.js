import { Route, Routes } from "react-router-dom";
import classes from "./Uranus.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplayImg from "../components/PlanetDisplayImg";
import PlanetDisplayText from "../components/PlanetDisplayText";
import planetUranus from "../assets/planet-uranus.svg";
import planetUranusInternal from "../assets/planet-uranus-internal.svg";
import uranusGeology from "../assets/geology-uranus.png";
import InnerNav from "../components/InnerNav";
import { Fragment } from "react";

function Uranus() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["uranus-active"]}
          inactiveClass={classes["uranus-inactive"]}
        />
        <div className="planet-display-cont centered">
          <InnerNav
            activeClass={classes["uranus-active-desk"]}
            inactiveClass={classes["uranus-inactive-desk"]}
          />
          <Routes>
            <Route
              path="overview"
              element={
                <Fragment>
                  <PlanetDisplayImg image={planetUranus} header={"URANUS"} />

                  <PlanetDisplayText
                    header={"URANUS"}
                    description={`Uranus is the seventh planet from the Sun. Its name is a reference to the 
              Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather 
              of Ares. It has the third-largest planetary radius and fourth-largest planetary 
              mass in the Solar System.`}
                    source={"https://en.wikipedia.org/wiki/Uranus"}
                  />
                </Fragment>
              }
            />
            <Route
              path="structure"
              element={
                <Fragment>
                  <PlanetDisplayImg
                    image={planetUranusInternal}
                    header={"URANUS"}
                  />

                  <PlanetDisplayText
                    header={"URANUS"}
                    description={`The standard model of Uranus's structure is that it consists of three layers: a 
              rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and 
              an outer gaseous hydrogen/helium envelope. The core is relatively small, with a 
              mass of only 0.55 Earth masses.`}
                    source={
                      "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
                    }
                  />
                </Fragment>
              }
            />
            <Route
              path="surface"
              element={
                <Fragment>
                  <PlanetDisplayImg
                    image={planetUranus}
                    header={"URANUS"}
                    isSurface={true}
                    surfaceImage={uranusGeology}
                  />

                  <PlanetDisplayText
                    header={"URANUS"}
                    description={` The composition of Uranus's atmosphere is different from its bulk, consisting mainly 
              of molecular hydrogen and helium. The helium molar fraction, i.e. the number of 
              helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.
            `}
                    source={"https://en.wikipedia.org/wiki/Uranus#Atmosphere"}
                  />
                </Fragment>
              }
            />
          </Routes>
        </div>
      </div>
      <NumericalInfo
        rotation={"17.2 HOURS"}
        revolution={"84 YEARS"}
        radius={"25,362 KM"}
        temp={"-195°C"}
      />
    </Fragment>
  );
}

export default Uranus;
