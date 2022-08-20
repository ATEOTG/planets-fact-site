import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          path="/planets-fact-site/"
          element={<Navigate replace to="/planets-fact-site/earth/overview" />}
        />
        <Route path="/planets-fact-site/earth/*" element={<Earth />} />
        <Route path="/planets-fact-site/mercury/*" element={<Mercury />} />
        <Route path="/planets-fact-site/venus/*" element={<Venus />} />
        <Route path="/planets-fact-site/mars/*" element={<Mars />} />
        <Route path="/planets-fact-site/jupiter/*" element={<Jupiter />} />
        <Route path="/planets-fact-site/saturn/*" element={<Saturn />} />
        <Route path="/planets-fact-site/uranus/*" element={<Uranus />} />
        <Route path="/planets-fact-site/neptune/*" element={<Neptune />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
