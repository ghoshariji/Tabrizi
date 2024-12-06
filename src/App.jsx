import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Tabrizi/Header/Header";
import Footer from "./Tabrizi/Footer/Footer";
import Home from "./Tabrizi/Home/Home";
import Contact from './Tabrizi/Contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
