import { Route, Routes } from "react-router-dom";
import classes from "./Mercury.module.css";
import InnerNavMobile from "../components/Mobile/InnerNavMobile";
import NumericalInfo from "../components/NumericalInfo";
import PlanetDisplayImg from "../components/PlanetDisplayImg";
import PlanetDisplayText from "../components/PlanetDisplayText";
import planetMercury from "../assets/planet-mercury.svg";
import planetMercuryInternal from "../assets/planet-mercury-internal.svg";
import mercuryGeology from "../assets/geology-mercury.png";
import InnerNav from "../components/InnerNav";
import NotFound from "./NotFound";
import { Fragment } from "react";

function Mercury() {
  return (
    <Fragment>
      <div className="page-cont">
        <InnerNavMobile
          activeClass={classes["mercury-active"]}
          inactiveClass={classes["mercury-inactive"]}
        />
        <div className="planet-display-cont centered">
          <InnerNav
            activeClass={classes["mercury-active-desk"]}
            inactiveClass={"inactive-desk"}
          />
          <Routes>
            <Route
              path="overview"
              element={
                <Fragment>
                  <PlanetDisplayImg image={planetMercury} header={"MERCURY"} />

                  <PlanetDisplayText
                    header={"MERCURY"}
                    description={`Mercury is the smallest planet in the Solar System and the closest 
                  to the Sun. Its orbit around the Sun takes 87.97 Earth days, the 
                  shortest of all the Sun's planets. Mercury is one of four terrestrial 
                  planets in the Solar System, and is a rocky body like Earth.`}
                    source={"https://en.wikipedia.org/wiki/Mercury_(planet)"}
                  />
                </Fragment>
              }
            />
            <Route
              path="structure"
              element={
                <Fragment>
                  <PlanetDisplayImg
                    image={planetMercuryInternal}
                    header={"MERCURY"}
                  />

                  <PlanetDisplayText
                    header={"MERCURY"}
                    description={`Mercury appears to have a solid silicate crust and mantle overlying a 
                  solid, iron sulfide outer core layer, a deeper liquid core layer, and 
                  a solid inner core. The planet's density is the second highest in the 
                  Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`}
                    source={
                      "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
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
                    image={planetMercury}
                    header={"MERCURY"}
                    isSurface={true}
                    surfaceImage={mercuryGeology}
                  />

                  <PlanetDisplayText
                    header={"MERCURY"}
                    description={`Mercury's surface is similar in appearance to that of the Moon, showing 
                  extensive mare-like plains and heavy cratering, indicating that it has 
                  been geologically inactive for billions of years. It is more heterogeneous 
                  than either Mars's or the Moon’s.
    `}
                    source={
                      "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
                    }
                  />
                </Fragment>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <NumericalInfo
        rotation={"58.6 DAYS"}
        revolution={"87.97 DAYS"}
        radius={"2,439.7 KM"}
        temp={"430°C"}
      />
    </Fragment>
  );
}

export default Mercury;
