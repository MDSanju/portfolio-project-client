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
import ContactPage from "./Pages/ContactForm/ContactPage/ContactPage";
import BlogPage from "./Pages/BlogPage/BlogPage/BlogPage";
import DetailPage from "./Pages/DetailPage/DetailPage/DetailPage";
import AboutPage from "./Pages/AboutPage/AboutPage/AboutPage";
import Screenshot1 from "./Pages/DetailPage/Screenshot1/Screenshot1";
import Screenshot2 from "./Pages/DetailPage/Screenshot2/Screenshot2";
import Screenshot3 from "./Pages/DetailPage/Screenshot3/Screenshot3";
import Screenshot4 from "./Pages/DetailPage/Screenshot4/Screenshot4";
import Screenshot5 from "./Pages/DetailPage/Screenshot5/Screenshot5";
import Screenshot6 from "./Pages/DetailPage/Screenshot6/Screenshot6";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/detail/:projectId" element={<DetailPage />} />
            <Route path="/screenshot1/:projectId" element={<Screenshot1 />} />
            <Route path="/screenshot2/:projectId" element={<Screenshot2 />} />
            <Route path="/screenshot3/:projectId" element={<Screenshot3 />} />
            <Route path="/screenshot4/:projectId" element={<Screenshot4 />} />
            <Route path="/screenshot5/:projectId" element={<Screenshot5 />} />
            <Route path="/screenshot6/:projectId" element={<Screenshot6 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactPage />} />
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
