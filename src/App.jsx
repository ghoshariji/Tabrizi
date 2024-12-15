import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Tabrizi/Header/Header";
import Footer from "./Tabrizi/Footer/Footer";
import Home from "./Tabrizi/Home/Home";
import Contact from "./Tabrizi/Contact/Contact";
import Chauffage from "./Tabrizi/Chauffage/Chauffage.jsx";
  import Sanitaire from "./Tabrizi/Sanitaire2/Sanitaire.jsx";
import Depange from "./Tabrizi/Depannage/Depange.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/chauffage" element={<Chauffage />} />
         <Route path="/sanitaire" element={<Sanitaire />} />
        <Route path="/depange" element={<Depange />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
