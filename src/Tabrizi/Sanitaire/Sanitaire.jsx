import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Background from "../Images/Sanitaire.svg";
import Title_Home from "../Images/Title_Home.svg";
import SanitaireInfo from "./SanitaireInfo";
import SanitaireHeader from "./SanitaireHeader/SanitaireHeader";
const Sanitaire = () => {
  return (
    <div>
      <section id="home">
        <div className="">
          <SanitaireHeader />
        
        </div>
        
        <div className="home">
          <div className="background-img">
            <img src={Background} alt="Fond" />
            
          </div>
          <div className="mt-10 bg-white">
                <SanitaireInfo />
                </div>
          <div className="background">
            <div className="container">
              <div>
                <img className="title" src={Title_Home} alt="Titre" />
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </section>
    </div>
  );
};

export default Sanitaire;
