import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import StaffManager from "./StaffManager";

const WeddingPage = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/staff-manager" element={<StaffManager />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default WeddingPage;
