import { Route, Routes } from "react-router-dom";
import classes from "./Saturn.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplay from "../components/PlanetDisplay";
import planetSaturn from "../assets/planet-saturn.svg";
import planetSaturnInternal from "../assets/planet-saturn-internal.svg";
import saturnGeology from "../assets/geology-saturn.png";
import { Fragment } from "react";

function Saturn() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["saturn-active"]}
          inactiveClass={classes["saturn-inactive"]}
        />
        <Routes>
          <Route
            path="overview"
            element={
              <PlanetDisplay
                image={planetSaturn}
                header={"SATURN"}
                description={`Saturn is the sixth planet from the Sun and the second-largest in the Solar 
              System, after Jupiter. It is a gas giant with an average radius of about 
              nine and a half times that of Earth. It only has one-eighth the average 
              density of Earth.`}
                source={"https://en.wikipedia.org/wiki/Saturn"}
              />
            }
          />
          <Route
            path="structure"
            element={
              <PlanetDisplay
                image={planetSaturnInternal}
                header={"SATURN"}
                description={`Despite consisting mostly of hydrogen and helium, most of Saturn's mass 
              is not in the gas phase, because hydrogen becomes a non-ideal liquid 
              when the density is above 0.01 g/cm3, which is reached at a radius 
              containing 99.9% of Saturn's mass.`}
                source={
                  "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
                }
              />
            }
          />
          <Route
            path="surface"
            element={
              <PlanetDisplay
                image={planetSaturn}
                isSurface={true}
                surfaceImage={saturnGeology}
                header={"SATURN"}
                description={`The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% 
              helium by volume. The planet's most famous feature is its prominent ring 
              system, which is composed mostly of ice particles with a smaller amount 
              of rocky debris and dust. 
            `}
                source={"https://en.wikipedia.org/wiki/Saturn#Atmosphere"}
              />
            }
          />
        </Routes>
      </div>
      <NumericalInfo
        rotation={"10.8 HOURS"}
        revolution={"29.46 YEARS"}
        radius={"58,232 KM"}
        temp={"-138°C"}
      />
    </Fragment>
  );
}

export default Saturn;
