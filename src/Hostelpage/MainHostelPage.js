import React from "react";
import NavbarTwo from "../navbars/NavbarTwo";
import FemaleHostelPage from "./FemaleHostelPage";
import MaleHostelPage from "./MaleHostelPage";
import "../Homepage/homepage.css";
const MainHostelPage = () => {
  return (
    <div>
      <NavbarTwo />
      <div className="Boys">
        <div className="Boyshead">
          <h1>Boys Hostel</h1>
        </div>
        <MaleHostelPage />
      </div>
      <div className="Girls">
        <div className="Boyshead">
          <h1>Girls Hostel</h1>
        </div>
        <FemaleHostelPage />
      </div>
    </div>
  );
};

export default MainHostelPage;
