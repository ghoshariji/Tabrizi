import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Images/Background.jpg";
import Title_Home from "../Images/Title_Home.svg";
import Info from "../Info/Info";
import Contact from "../Contact/Contact";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Chauffage.css";
import Sidebar from "../Sidebar";
import HeaderChauffage from "./HeaderChauffage.jsx";
import img1 from "./image/image1.png";
import img2 from "./image/image2.png";
import img3 from "./image/image3.png";
import img4 from "./image/image4.png";

const Chauffage = () => {
  return (
    <div>
      <>
        <section className="chauffage">
          <div className="">
            <HeaderChauffage />
          </div>

          <div className="home">
            <div className="background-img">
              <img src={Background} alt="Fond" />
            </div>

            <div className="background">
              <div className="container">
                <div>
                  <img className="title" src={Title_Home} alt="Titre" />

                  <button onClick={() => scrollToSection("contact")}>
                    À propos de nous
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="chauffage-container">
          <div className="section">
            <h2>ÉNERGIE VERTE</h2>
        
            <div className="item">
              <div className="item-border image1">
                <img src={img1} />
                <p>Pompe à chaleur air/eau</p>
              </div>
            </div>
        
            <div className="item">
              <div className="item-border image2">
                <img src={img2} />
                <p>Pompe à chaleur air/air</p>
              </div>
            </div>
          </div>
        
          <div className="section">
            <h2>ÉNERGIE FOSSILE</h2>
            <div className="item">
              <div className="item-border image3">
                <img src={img3}/>
                <p>Chauffage à mazout</p>
              </div>
            </div>
            <div className="item">
              <div className="item-border image4">
                <img src={img4} />
                <p>Chauffage à gaz</p>
              </div>
            </div>
          </div>
        </div>
        
          
          <Contact />
        </section>
      </>
    </div>
  );
};

export default Chauffage;
