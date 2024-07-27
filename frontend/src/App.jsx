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
      <Footer></Footer>
      <Course></Course>
    </div>
  );
};

export default App;
