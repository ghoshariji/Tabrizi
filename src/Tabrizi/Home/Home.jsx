import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../Images/Background.jpg";
import Title_Home from "../Images/Title_Home.svg";
import Info from "../Info/Info";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Home.css";
import Sidebar from "../Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToContact = () => {
    navigate("/contact");
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="home">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="">
          <Header />
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

          <div className="background relative w-full h-screen flex flex-col items-center justify-center">
            <div className="relative w-full h-3/5 sm:h-4/5 lg:h-2/5 flex items-center justify-center px-4 lg:px-8">
              <img
                className="w-3/4 h-auto object-cover sm:w-2/3 sm:h-auto md:w-1/2 md:h-auto lg:w-1/3 lg:h-auto mx-auto"
                src={Title_Home}
                alt="Titre"
              />
              <h1 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-4xl md:text-5xl lg:text-3xl font-semibold text-center px-4 lg:px-8">
                CHAUFFAGE FIABLE,
                <br />
                CONFORT ASSURÉ
              </h1>
            </div>

            <div className="text-center px-4 lg:px-12 sm:mt-4 md:mt-4 lg:mt-8 lg:mb-4 md:mb-4">
              <p className="text-sm sm:text-lg md:text-xl lg:text-base leading-relaxed text-white">
                AG Sanitaire vous accompagne dans tous vos projets,
                <br />
                en vous proposant des solutions de chauffage performantes,
                <br />
                économiques et parfaitement adaptées à vos besoins spécifiques
                <br />
                pour un confort optimal en toute saison.
              </p>
              <button
                onClick={() => scrollToSection("comma")}
                className="mt-4 px-8 py-4 bg-red-600 hover:bg-red-600 text-white text-base sm:text-lg md:text-xl lg:text-lg"
              >
                À propos de nous
              </button>
            </div>
          </div>
        </div>
        <Info />
        <Contact />
      </section>
    </>
  );
};

export default Home;
