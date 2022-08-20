import { Route, Routes } from "react-router-dom";
import classes from "./Mars.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplayImg from "../components/PlanetDisplayImg";
import PlanetDisplayText from "../components/PlanetDisplayText";
import planetMars from "../assets/planet-mars.svg";
import planetMarsInternal from "../assets/planet-mars-internal.svg";
import marsGeology from "../assets/geology-mars.png";
import InnerNav from "../components/InnerNav";
import { Fragment } from "react";

function Mars() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["mars-active"]}
          inactiveClass={classes["mars-inactive"]}
        />
        <div className="planet-display-cont centered">
          <InnerNav
            activeClass={classes["mars-active-desk"]}
            inactiveClass={"inactive-desk"}
          />
          <Routes>
            <Route
              path="overview"
              element={
                <Fragment>
                  <PlanetDisplayImg image={planetMars} header={"MARS"} />

                  <PlanetDisplayText
                    header={"MARS"}
                    description={`Mars is the fourth planet from the Sun and the second-smallest planet 
              in the Solar System, being larger than only Mercury. In English, Mars 
              carries the name of the Roman god of war and is often referred to as 
              the "Red Planet".`}
                    source={"https://en.wikipedia.org/wiki/Mars"}
                  />
                </Fragment>
              }
            />
            <Route
              path="structure"
              element={
                <Fragment>
                  <PlanetDisplayImg
                    image={planetMarsInternal}
                    header={"MARS"}
                  />

                  <PlanetDisplayText
                    header={"MARS"}
                    description={` Like Earth, Mars has differentiated into a dense metallic core overlaid 
              by less dense materials. Scientists initially determined that the core 
              is at least partially liquid. Current models of its interior imply a 
              core consisting primarily of iron and nickel with about 16–17% sulfur.`}
                    source={
                      "https://en.wikipedia.org/wiki/Mars#Internal_structure"
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
                    image={planetMars}
                    header={"MARS"}
                    isSurface={true}
                    surfaceImage={marsGeology}
                  />

                  <PlanetDisplayText
                    header={"MARS"}
                    description={`Mars is a terrestrial planet whose surface consists of minerals containing 
              silicon and oxygen, metals, and other elements that typically make up rock. 
              The surface is primarily composed of tholeiitic basalt, although parts are 
              more silica-rich than typical basalt.
        `}
                    source={
                      "https://en.wikipedia.org/wiki/Mars#Surface_geology"
                    }
                  />
                </Fragment>
              }
            />
          </Routes>
        </div>
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
