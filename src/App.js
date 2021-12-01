import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NoMatch from "./Pages/NoMatch/NoMatch";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddProject from "./Pages/AddProject/AddProject/AddProject";
import "./App.css";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/addProject"
              element={
                <PrivateRoute>
                  <AddProject />
                </PrivateRoute>
              }
            />
            <Route
              path="/makeAdmin"
              element={
                <PrivateRoute>
                  <MakeAdmin />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
