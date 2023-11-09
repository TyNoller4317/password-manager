import React from "react";
import Navbar from "../components/Navbar";
import SideNavigation from "../components/SideNavigation";
import PasswordsDisplay from "../components/PasswordsDisplay";
import NotesDisplay from "../components/NotesDisplay";

function NoteHomepage() {
  return (
    <>
      <Navbar />
      <SideNavigation component={<NotesDisplay />} />
    </>
  );
}

export default NoteHomepage;
