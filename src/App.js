import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/earth" />} />
        <Route path="/earth/*" element={<Earth />} />
        <Route path="/mercury/*" element={<Mercury />} />
        <Route path="/venus/*" element={<Venus />} />
        <Route path="/mars/*" element={<Mars />} />
        <Route path="/jupiter/*" element={<Jupiter />} />
      </Routes>
    </Fragment>
  );
}

export default App;
