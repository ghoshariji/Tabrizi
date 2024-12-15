import React, { useState } from "react";
import Background from "./image/background-Image.jpeg";
import Title_Home from "./image/chaufage.svg";
import Contact from "../Contact/Contact";
import "./Chauffage.css";
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
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="background">
              <div className="container">
                <div className="mr-40">
                  <img className="title" src={Title_Home} alt="Titre" />
                </div>
              </div>
            </div>
          </div>

          <div className="chauffage-container">
            <div className="section">
              <h2 className="mt-5">ÉNERGIE VERTE</h2>

              <div className="item">
                <div className="item-border image1 mt-10">
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
              <h2 className="mt-5">ÉNERGIE FOSSILE</h2>
              <div className="item">
                <div className="item-border image3 mt-10">
                  <img src={img3} />
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
