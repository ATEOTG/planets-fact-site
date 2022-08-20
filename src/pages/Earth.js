import { Route, Routes } from "react-router-dom";
import classes from "./Earth.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplay from "../components/PlanetDisplay";
import planetEarth from "../assets/planet-earth.svg";
import planetEarthInternal from "../assets/planet-earth-internal.svg";
import earthGeology from "../assets/geology-earth.png";
import { Fragment } from "react";
import InnerNav from "../components/InnerNav";
import ReactDOM from "react-dom";

function Earth() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["earth-active"]}
          inactiveClass={classes["earth-inactive"]}
        />
        <InnerNav />
        <Routes>
          <Route
            path="overview"
            element={
              <PlanetDisplay
                image={planetEarth}
                header={"EARTH"}
                description={`Third planet from the Sun and the only known planet to harbor life. 
                About 29.2% of Earth's surface is land with remaining 70.8% is 
                covered with water. Earth's distance from the Sun, physical properties 
                and geological history have allowed life to evolve and thrive.`}
                source={"https://en.wikipedia.org/wiki/Earth"}
              />
            }
          />
          <Route
            path="structure"
            element={
              <PlanetDisplay
                image={planetEarthInternal}
                header={"EARTH"}
                description={`Earth's interior, like that of the other terrestrial planets, is divided 
              into layers by their chemical or physical (rheological) properties. The 
              outer layer is a chemically distinct silicate solid crust, which is 
              underlain by a highly viscous solid mantle.`}
                source={
                  "https://en.wikipedia.org/wiki/Earth#Internal_structure"
                }
              />
            }
          />
          <Route
            path="surface"
            element={
              <PlanetDisplay
                image={planetEarth}
                isSurface={true}
                surfaceImage={earthGeology}
                header={"EARTH"}
                description={`The total surface area of Earth is about 510 million km2. The continental 
  crust consists of lower density material such as the igneous rocks granite 
  and andesite. Less common is basalt, a denser volcanic rock that is the 
  primary constituent of the ocean floors.
`}
                source={"https://en.wikipedia.org/wiki/Earth#Surface"}
              />
            }
          />
        </Routes>
      </div>
      <NumericalInfo
        rotation={"0.99 DAYS"}
        revolution={"365.26 DAYS"}
        radius={"6,371 KM"}
        temp={"16°C"}
      />
    </Fragment>
  );
}

export default Earth;
