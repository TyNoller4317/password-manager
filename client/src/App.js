import "./App.css";
import Login from "./auth/Login";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import CreatePassword from "./pages/CreatePassword";
import Navbar from "./components/Navbar";
import NoteHomepage from "./pages/NoteHomepage";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Homepage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/passwords/create_pass"
            element={user ? <CreatePassword /> : <Login />}
          />
          <Route path="/notes" element={user ? <NoteHomepage /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
