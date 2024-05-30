import React from "react";
import "./App.css";
import Header from "./sections/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

type AppProps = {};

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/AboutUs" Component={AboutUs}></Route>
          <Route path="/Services" Component={Services}></Route>
          <Route path="/Blog" Component={Blog}></Route>
          <Route path="/ContactUs" Component={ContactUs}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
