import { Route, Routes } from "react-router-dom";
import classes from "./Jupiter.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplay from "../components/PlanetDisplay";
import planetJupiter from "../assets/planet-jupiter.svg";
import planetJupiterInternal from "../assets/planet-jupiter-internal.svg";
import jupiterGeology from "../assets/geology-jupiter.png";
import { Fragment } from "react";

function Jupiter() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["jupiter-active"]}
          inactiveClass={classes["jupiter-inactive"]}
        />
        <Routes>
          <Route
            path="overview"
            element={
              <PlanetDisplay
                image={planetJupiter}
                header={"JUPITER"}
                description={`Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
              It is a gas giant with a mass two and a half times that of all the other 
              planets in the Solar System combined, but less than one-thousandth the mass 
              of the Sun.`}
                source={"https://en.wikipedia.org/wiki/Jupiter"}
              />
            }
          />
          <Route
            path="structure"
            element={
              <PlanetDisplay
                image={planetJupiterInternal}
                header={"JUPITER"}
                description={`When the Juno arrived in 2016, it found that Jupiter has a very diffuse core 
              that mixes into its mantle. A possible cause is an impact from a planet of 
              about ten Earth masses a few million years after Jupiter's formation, which 
              would have disrupted an originally solid Jovian core.`}
                source={
                  "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
                }
              />
            }
          />
          <Route
            path="surface"
            element={
              <PlanetDisplay
                image={planetJupiter}
                isSurface={true}
                surfaceImage={jupiterGeology}
                header={"JUPITER"}
                description={`The best known feature of Jupiter is the Great Red Spot, a persistent 
              anticyclonic storm located 22° south of the equator. It is known to have 
              existed since at least 1831, and possibly since 1665.
        `}
                source={
                  "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
                }
              />
            }
          />
        </Routes>
      </div>
      <NumericalInfo
        rotation={"9.93 HOURS"}
        revolution={"11.86 YEARS"}
        radius={"69,911 KM"}
        temp={"-108°C"}
      />
    </Fragment>
  );
}

export default Jupiter;
