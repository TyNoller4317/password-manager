import React, { useState, useEffect } from "react";
import "../styles/passwordDisplay.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthContext } from "../hooks/useAuthContext";

function PasswordsDisplay() {
  const [data, setData] = useState([{}]);
  const { user } = useAuthContext();

  useEffect(() => {
    fetch("/api/passwords", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
    })
      .then((res) => res.json())
      .then((passwordData) => setData(passwordData));
  }, []);

  const handleDelete = (event) => {
    fetch(`/api/passwords/${event.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
    }).then((response) => {
      if (response.status === 200) {
        console.log("Password Deleted");
        window.location.reload();
      } else {
        throw new Error("Password Not Deleted");
      }
    });
  };

  return (
    <div className="password-container">
      <div className="password-add">
        <h1>Add Password</h1>
        <Link to="/passwords/create_pass" className="text">
          <AiOutlinePlus className="icons" />
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {data.map((val, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={
                      "https://s2.googleusercontent.com/s2/favicons?domain=" +
                      val.destination
                    }
                    className="destination-img"
                    alt=""
                  />
                  {val.destination}
                </TableCell>
                <TableCell component="th" scope="row">
                  {val.username}
                </TableCell>
                <TableCell component="th" scope="row">
                  {val.password}
                </TableCell>
                <TableCell component="th" scope="row">
                  <button
                    id={val._id}
                    onClick={handleDelete}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PasswordsDisplay;
