import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Background from "../Images/Sanitaire.svg";
import Title_Home from "../Images/Title_Sanitaire.svg";
import img1 from "./Image/image1.png";
import img2 from "./Image/image2.png";
import img3 from "./Image/image3.png";
import img4 from "./Image/sanitaire.svg";

import "./Sanitaire2.css";
import SanitaireHeader from "./SanitaireHeader";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import SaniSidebar from "./SanitaireSidebar";

const Sanitaire = () => {
  const infoCards = [
    {
      title: "RÉNOVATION",
      img: `${img1}`,
      icon: "path/to/icon_image.png",
      title1: "Modernisez vos installations sanitaires !",
      description:
        "Notre expertise en rénovation vous garantit des installations modernes, fonctionnelles et conformes aux normes. Transformez votre salle de bain ou votre cuisine en espaces élégants et pratiques grâce à des solutions sur-mesure.",
    },
    {
      title: "CONSTRUCTION NEUVE",
      img: `${img2}`,
      icon: "path/to/icon_image.png",
      title1: "Des systèmes sanitaires adaptés à vos projets !",
      description:
        "Nous collaborons avec vous dès la conception pour intégrer des installations sanitaires performantes, économes en énergie et adaptées à vos besoins. Offrez à votre bâtiment un confort optimal.",
    },
    {
      title: "INTRODUCTION EAU/GAZ",
      img: `${img3}`,
      icon: "path/to/icon_image.png",
      title1: "L’introduction eau/gaz maîtrisée pour votre confort !",
      description:
        "Nous assurons une installation sécurisée et durable des réseaux d’eau et de gaz. Bénéficiez d’un service professionnel pour un raccordement fiable et conforme à vos attentes.",
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [val, setVal] = useState("");

  const contactFunc = (val) => {
    setVal(val);
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <section id="sanitaire-home">
        <SaniSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="">
          <SanitaireHeader />
        </div>
        <button
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          className="fixed top-4 right-4 text-white p-3 text-2xl z-50 md:hidden "
          style={{ marginRight: "1rem" }}
        >
          {isSidebarOpen ? (
            <FaTimes className="text-2xl mb-5" />
          ) : (
            <>
              <svg
                width="18"
                height="5"
                viewBox="0 0 17 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4.37114e-08"
                  y1="0.5"
                  x2="17"
                  y2="0.500001"
                  stroke="white"
                />
              </svg>

              <svg
                width="18"
                height="5"
                viewBox="0 0 17 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4.37114e-08"
                  y1="0.5"
                  x2="17"
                  y2="0.500001"
                  stroke="white"
                />
              </svg>
              <svg
                width="18"
                height="4"
                viewBox="0 0 17 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4.37114e-08"
                  y1="0.5"
                  x2="17"
                  y2="0.500001"
                  stroke="white"
                />
              </svg>
            </>
          )}
        </button>

        <div className="home">
          <div className="background-img">
            <img src={Background} alt="Fond" />
          </div>
          <div className="background">
            <div className="container">
              <div>
                <img className="title" src={img4} alt="Titre" />
              </div>
            </div>
          </div>
        </div>

        {/* Updated class name here */}
        <section id="sanitaire">
        <div className="sanitaire-container" style={{ overflowX: "hidden" }}>
          {infoCards.map((card, index) => (
            <div key={index} onClick={() => contactFunc(card.title)}>
              <div className="item relative">
                {/* Blue Icon Circle on Left */}
                <div className="absolute left-8 top-8 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-0.5 w-4 h-4 rounded-full"></div>

                {/* Image Section */}
                <div className="item-sani relative mb-4 p-5 mt-10">
                  <h3 className="text-2xl font-bold text-white mb-14 mt-12 text-center">
                    {card.title}
                  </h3>
                  <div className="item-border-san image32">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4 pl-5 pr-3 text-left">
                    {card.title1}
                  </h4>

                  {/* Description */}
                  <p className="text-white mb-10 p-5 text-left">
                    {card.description}
                  </p>
                </div>

                {/* Title1 */}
              </div>
            </div>
          ))}
        </div>
        </section>




        <Contact val={val} />
      </section>
    </div>
  );
};

export default Sanitaire;
