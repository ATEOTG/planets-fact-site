import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Earth from "./pages/Earth";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/earth" />} />
        <Route path="/earth/*" element={<Earth />} />
      </Routes>
    </Fragment>
  );
}

export default App;
