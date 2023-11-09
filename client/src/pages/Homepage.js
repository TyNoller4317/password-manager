import React from "react";
import Navbar from "../components/Navbar";
import SideNavigation from "../components/SideNavigation";
import PasswordsDisplay from "../components/PasswordsDisplay";
import Box from "@mui/material/Box";

function Homepage() {
  return (
    <>
      <Navbar />
      <SideNavigation component={<PasswordsDisplay />} />
    </>
  );
}

export default Homepage;
