import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { TeamDetails } from "../pages/Team";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/teams/:id"} element={<TeamDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
