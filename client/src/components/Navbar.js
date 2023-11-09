import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useLogout } from "../hooks/useLogout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  const { logout } = useLogout();

  return (
    <>
      <AppBar
        position="fixed"
        className="navbar"
        color="inherit"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Link to="/" className="text">
            Dashboard
          </Link>
          {/* <ArrowDropDownIcon /> */}
          <Link className="text" onClick={logout}>
            Logout
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
