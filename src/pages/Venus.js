import { Route, Routes } from "react-router-dom";
import classes from "./Venus.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplay from "../components/PlanetDisplay";
import planetVenus from "../assets/planet-venus.svg";
import planetVenusInternal from "../assets/planet-venus-internal.svg";
import venusGeology from "../assets/geology-venus.png";
import { Fragment } from "react";

function Venus() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["venus-active"]}
          inactiveClass={classes["venus-inactive"]}
        />
        <Routes>
          <Route
            path="overview"
            element={
              <PlanetDisplay
                image={planetVenus}
                header={"VENUS"}
                description={`Venus is the second planet from the Sun. It is named after the 
              Roman goddess of love and beauty. As the brightest natural object 
              in Earth's night sky after the Moon, Venus can cast shadows and 
              can be, on rare occasions, visible to the naked eye in broad daylight.`}
                source={"https://en.wikipedia.org/wiki/Venus"}
              />
            }
          />
          <Route
            path="structure"
            element={
              <PlanetDisplay
                image={planetVenusInternal}
                header={"VENUS"}
                description={`The similarity in size and density between Venus and Earth suggests 
              they share a similar internal structure: a core, mantle, and crust. 
              Like that of Earth, Venusian core is most likely at least partially 
              liquid because the two planets have been cooling at about the same rate.`}
                source={
                  "https://en.wikipedia.org/wiki/Venus#Internal_structure"
                }
              />
            }
          />
          <Route
            path="surface"
            element={
              <PlanetDisplay
                image={planetVenus}
                isSurface={true}
                surfaceImage={venusGeology}
                header={"VENUS"}
                description={`Much of the Venusian surface appears to have been shaped by volcanic activity. 
              Venus has several times as many volcanoes as Earth, and it has 167 large 
              volcanoes that are over 100 km (60 mi) across. The only volcanic complex 
              of this size on Earth is the Big Island of Hawaii.
    `}
                source={"https://en.wikipedia.org/wiki/Venus#Surface"}
              />
            }
          />
        </Routes>
      </div>
      <NumericalInfo
        rotation={"243 DAYS"}
        revolution={"224.7 DAYS"}
        radius={"6,051.8 KM"}
        temp={"471°C"}
      />
    </Fragment>
  );
}

export default Venus;
