import { Route, Routes } from "react-router-dom";
import classes from "./Mars.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplay from "../components/PlanetDisplay";
import planetMars from "../assets/planet-mars.svg";
import planetMarsInternal from "../assets/planet-mars-internal.svg";
import marsGeology from "../assets/geology-mars.png";
import { Fragment } from "react";

function Mars() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["mars-active"]}
          inactiveClass={classes["mars-inactive"]}
        />
        <Routes>
          <Route
            path="overview"
            element={
              <PlanetDisplay
                image={planetMars}
                header={"MARS"}
                description={`Mars is the fourth planet from the Sun and the second-smallest planet 
              in the Solar System, being larger than only Mercury. In English, Mars 
              carries the name of the Roman god of war and is often referred to as 
              the "Red Planet".`}
                source={"https://en.wikipedia.org/wiki/Mars"}
              />
            }
          />
          <Route
            path="structure"
            element={
              <PlanetDisplay
                image={planetMarsInternal}
                header={"MARS"}
                description={` Like Earth, Mars has differentiated into a dense metallic core overlaid 
              by less dense materials. Scientists initially determined that the core 
              is at least partially liquid. Current models of its interior imply a 
              core consisting primarily of iron and nickel with about 16–17% sulfur.`}
                source={"https://en.wikipedia.org/wiki/Mars#Internal_structure"}
              />
            }
          />
          <Route
            path="surface"
            element={
              <PlanetDisplay
                image={planetMars}
                isSurface={true}
                surfaceImage={marsGeology}
                header={"MARS"}
                description={`Mars is a terrestrial planet whose surface consists of minerals containing 
              silicon and oxygen, metals, and other elements that typically make up rock. 
              The surface is primarily composed of tholeiitic basalt, although parts are 
              more silica-rich than typical basalt.
        `}
                source={"https://en.wikipedia.org/wiki/Mars#Surface_geology"}
              />
            }
          />
        </Routes>
      </div>
      <NumericalInfo
        rotation={"1.03 DAYS"}
        revolution={"1.88 YEARS"}
        radius={"3,389.5 KM"}
        temp={"-28°C"}
      />
    </Fragment>
  );
}

export default Mars;
