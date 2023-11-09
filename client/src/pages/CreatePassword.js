import React, { useState } from "react";
import { useCreate } from "../hooks/useCreate";
import "../styles/createPassword.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { printStrongNess } from "../algorithms/passwordStrength";

function CreatePassword() {
  const { create_passwords } = useCreate();
  const [destination, setDestination] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const colors = {
    Weak: "red",
    Moderate: "yellow",
    Strong: "green",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await create_passwords(destination, username, password);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <div className="form-url">
          <div className="form-url-upper">
            <div className="form-url-upper-wrapper">
              <img
                src={
                  "https://s2.googleusercontent.com/s2/favicons?domain=" +
                  destination
                }
                alt=""
              />
              <h1>URL</h1>
            </div>
            <button onClick={handleSubmit}>Save</button>
          </div>

          <input type="text" className="url-input" value={destination} />
        </div>
        <form method="POST" className="password-form">
          <div className="form-item">
            <p>URL</p>
            <input
              type="text"
              name="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="form-item">
            <p>Username</p>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-item">
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-item strength">
            <ul>
              <li>Password must contain both upper and lower case letters.</li>
              <li>Password must contain atleast 1 special character.</li>
              <li>Password must be 12 characters long.</li>
              <li>Password must contain digits.</li>
            </ul>

            <p>Password Strength: {printStrongNess(password)}</p>

            <div className={colors[printStrongNess(password)]}>
              <p></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatePassword;
