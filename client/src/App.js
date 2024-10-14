import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BlogFeed from "./components/blogs/BlogFeed";
import BlogEditor from "./components/blogs/BlogEditor";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogFeed />} />
        <Route path="/editor" element={<BlogEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
