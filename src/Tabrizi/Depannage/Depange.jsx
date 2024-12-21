import React, { useState } from "react";
import Background from "./Image/Background-Image.jpeg";
import Title_Home from "./Image/depange.svg";
import "./Depange.css";
import DepangeHeader from "./DepangeHeader";
import Contact from "../Contact/Contact";
import img1 from "./Image/image1.png";
import img2 from "./Image/image2.png";
import img3 from "./Image/image3.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import DepSidebar from "./DepangeSidebar";

const Depange = () => {
  const infoCards = [
    {
      title: "RECHERCHE DE FUITE",
      img: `${img1}`, // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Localisez et réparez les fuites rapidement !", // Replace with actual icon path
      description:
        "Grâce à nos équipements spécialisés, nous détectons nous détectons les fuites invisibles sans dégâts inutiles. Économisez temps et argent avec un diagnostic précis et des réparations durables.",
    },
    {
      title: "CHAUFFAGE MOBILE",
      img: `${img2}`, // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Des solutions de chauffage temporaire pour vous !", // Replace with actual icon path
      // Replace with actual icon path
      description:
        "Nous vous fournissons des chauffages mobiles performants pour les périodes de travaux, d'événements ou en cas de panne prolongée. Profitez d’un confort thermique immédiat, où que vous soyez.",
    },
    {
      title: "URGENCE",
      img: `${img3}`, // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Une assistance rapide en cas de panne !", // Replace with actual icon path
      // Replace with actual icon path
      description:
        "Nos équipes interviennent rapidemment pour résoudre vos problèmes de chauffage ou de plomberie. Faites confiance à notre réactivité et à notre expertise pour un dépannage efficace et sécurisé.",
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
      <section id="home-dep">
        <DepSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="">
          <DepangeHeader />
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
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="background">
            <div className="container" style={{ position: "relative" }}>
              <div>
                <img
                  className="title w-full h-auto sm:w-3/4 md:w-2/3"
                  src={Title_Home}
                  alt="Titre"
                />
                <h1
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl font-sans text-center"
                  style={{
                    margin: "0",
                  }}
                >
                  DÉPANNAGE
                </h1>
              </div>
            </div>
          </div>
        </div>

        <section id="depange">
          <div className="depange-container">
            {infoCards.map((card, index) => (
              <div key={index}>
                <div
                  className="item-dev relative"
                  onClick={() => contactFunc(card.title)}
                >
                  {/* Blue Icon Circle on Left */}
                  <div className="absolute left-8 top-8 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-0.5 w-4 h-4 rounded-full"></div>

                  {/* Card Title */}

                  {/* Image Section */}
                  <div className="relative mb-4 p-5 mt-10">
                    <h3 className="text-2xl font-bold text-white mb-14 mt-4 text-center">
                      {card.title}
                    </h3>
                    <div className="item-border-dep image23">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>

                    {/* Title1 */}
                    <h4 className="text-xl font-semibold text-white mb-4 px-5 text-left">
                      {card.title1}
                    </h4>

                    {/* Description */}
                    <p className="text-white mb-10 px-5 text-left">
                      {card.description}
                    </p>
                  </div>
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

export default Depange;
