import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyIcon from "@mui/icons-material/Key";
import NoteIcon from "@mui/icons-material/Note";
import ListIcon from "@mui/icons-material/List";
import MailIcon from "@mui/icons-material/Mail";
import PasswordsDisplay from "./PasswordsDisplay";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function SideNavigation({ component }) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <KeyIcon />
                  </ListItemIcon>
                  <Link to="/" className="link-text">
                    Passwords
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NoteIcon />
                  </ListItemIcon>
                  <Link to="/notes" className="link-text">
                    Notes
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <Link to="/" className="link-text">
                    Shopping List
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <Link to="/test" className="link-text">
                    Send Email
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 12 }}>
          {component}
        </Box>
      </Box>
    </>
  );
}

export default SideNavigation;
