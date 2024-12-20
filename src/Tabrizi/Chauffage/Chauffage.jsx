import React, { useState } from "react";
import Background from "./image/background-Image.jpeg";
import Title_Home from "./image/chaufage.png";
import Title_Home1 from "./image1.png";
import Title_Home2 from "./image.png";
import Contact from "../Contact/Contact";
import "./Chauffage.css";
import HeaderChauffage from "./HeaderChauffage.jsx";
import img1 from "./image/image1.png";
import img2 from "./image/image2.png";
import img3 from "./image/image3.png";
import img4 from "./image/image4.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import ChaSidebar from "./ChauSidebar.jsx";

const Chauffage = () => {
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
      <>
        <section className="chauffage" id="chauffage">
          <ChaSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <div className="">
            <HeaderChauffage />
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
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="background">
            <div className="container">
              <div className="md:mr-40">
                <div className="relative">
                  {/* Image */}
                  <img
                  className="title w-full object-cover h-auto hidden sm:block"
                  src={Title_Home}
                  alt="Titre"
                />
              
                {/* Image for small screens */}
                <img
                  className="title w-full object-cover h-auto sm:hidden"
                  src={Title_Home1}
                  alt="Titre"
                />
                 {/**  <img
                  className="title w-full object-cover h-auto sm:hidden"
                  src={Title_Home1}
                  alt="Titre"
                />*/}
                  {/* Text overlay */}
                  <div className="custom-margin absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 px-4 sm:mt-[50px] md:mt-[50px]">
                  <h2 className="text-3xl sm:hidden text-white" style={{fontWeight:"500px", fontFamily:"Rubik"}}>CHAUFFAGE</h2>
                  <div className="ml-10">
                  <p className="text-black text-center text-xs sm:text-sm md:text-base lg:text-lg p-4 leading-normal sm:leading-relaxed sm:mt-5 ml-0 sm:ml-9">
                  Découvrez nos solutions de chauffage écologiques avec des pompes à
                  chaleur performantes pour une énergie verte et durable. Optimisez
                  votre confort tout en réduisant votre empreinte carbone.
                </p>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          </div>

          <section id="chhauffage-con">
            <div className="chauffage-container">
              <div
                className="section"
                onClick={() => contactFunc("ÉNERGIE VERTE")}
              >
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

              <div
                className="section"
                onClick={() => contactFunc("ÉNERGIE FOSSILE")}
              >
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
          </section>
          <Contact val={val} />
        </section>
      </>
    </div>
  );
};

export default Chauffage;

