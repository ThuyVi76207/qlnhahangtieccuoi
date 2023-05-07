import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WeddingPage from "./page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/wedding-restaurant-manager" />}
          ></Route>
          <Route
            path="/wedding-restaurant-manager/*"
            element={<WeddingPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
