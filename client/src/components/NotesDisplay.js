import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthContext } from "../hooks/useAuthContext";
import "../styles/NoteDisplay.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function NotesDisplay() {
  const [noteData, setNoteData] = useState([{}]);
  const [currentNote, setCurrentNote] = useState({});
  const { user } = useAuthContext();
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  useEffect(() => {
    fetch("/api/notes", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setNoteData(data));
  }, []);

  const handleSubmit = async () => {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
      body: JSON.stringify({
        note: value,
      }),
    });

    const json = response.json();
  };

  const handleEditOpen = async (event) => {
    console.log(event.target.id);
    await fetch(`/api/notes/${event.target.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setCurrentNote(data));

    setEditOpen(true);
  };

  // for (let i = 0; i < noteData.length; i++) {
  //   if(noteData[i]._id === )
  //   console.log(noteData[i]);
  // }

  return (
    <>
      <div className="notes-container">
        <div className="password-add">
          <h1>Add Note</h1>
          <Link className="text" onClick={handleOpen}>
            <AiOutlinePlus className="icons" />
          </Link>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="add-note-fix">
              <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
                Create a Note
              </Typography>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ paddingTop: 20 }}
              />
              <button className="submit-btn" onClick={handleSubmit}>
                Add Note
              </button>
            </div>
          </Box>
        </Modal>

        <Modal
          open={editOpen}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ReactQuill
              theme="snow"
              value={currentNote.note}
              // onChange={}
              style={{ paddingTop: 20 }}
            />
            <button>Delete</button>
          </Box>
        </Modal>

        <div className="note-card-container">
          {noteData.map((note, index) => (
            <div className="note-card" onClick={handleEditOpen} id={note._id}>
              <p dangerouslySetInnerHTML={{ __html: note.note }}></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NotesDisplay;
