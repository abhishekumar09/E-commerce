import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Course from "./components/Course";
// import './App.css'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Course></Course>
      <Footer></Footer>
    </div>
  );
};

export default App;
