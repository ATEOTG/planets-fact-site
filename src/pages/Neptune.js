import { Route, Routes } from "react-router-dom";
import classes from "./Neptune.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplayImg from "../components/PlanetDisplayImg";
import PlanetDisplayText from "../components/PlanetDisplayText";
import planetNeptune from "../assets/planet-neptune.svg";
import planetNeptuneInternal from "../assets/planet-neptune-internal.svg";
import neptuneGeology from "../assets/geology-neptune.png";
import InnerNav from "../components/InnerNav";
import { Fragment } from "react";

function Neptune() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["neptune-active"]}
          inactiveClass={classes["neptune-inactive"]}
        />
        <div className="planet-display-cont centered">
          <InnerNav
            activeClass={classes["neptune-active-desk"]}
            inactiveClass={"inactive-desk"}
          />
          <Routes>
            <Route
              path="overview"
              element={
                <Fragment>
                  <PlanetDisplayImg image={planetNeptune} header={"NEPTUNE"} />

                  <PlanetDisplayText
                    header={"NEPTUNE"}
                    description={`Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar 
              System, it is the fourth-largest planet by diameter, the third-most-massive planet, 
              and the densest giant planet. It is 17 times the mass of Earth, more massive than 
              its near-twin Uranus.`}
                    source={"https://en.wikipedia.org/wiki/Neptune"}
                  />
                </Fragment>
              }
            />
            <Route
              path="structure"
              element={
                <Fragment>
                  <PlanetDisplayImg
                    image={planetNeptuneInternal}
                    header={"NEPTUNE"}
                  />

                  <PlanetDisplayText
                    header={"NEPTUNE"}
                    description={` Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% 
              to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. 
              Increasing concentrations of methane, ammonia and water are found in the lower regions.`}
                    source={
                      "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
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
                    image={planetNeptune}
                    header={"NEPTUNE"}
                    isSurface={true}
                    surfaceImage={neptuneGeology}
                  />

                  <PlanetDisplayText
                    header={"NEPTUNE"}
                    description={`Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also 
              present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in 
              the red and infrared portion of the spectrum.
                `}
                    source={"https://en.wikipedia.org/wiki/Neptune#Atmosphere"}
                  />
                </Fragment>
              }
            />
          </Routes>
        </div>
      </div>
      <NumericalInfo
        rotation={"16.08 HOURS"}
        revolution={"164.79 YEARS"}
        radius={"24,622 KM"}
        temp={"-201°C"}
      />
    </Fragment>
  );
}

export default Neptune;
