import React, { useState } from "react";
import Background from "./image/background-Image.jpeg";
import Title_Home from "./image/chaufage.png";
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
                <div className="mr-40">
                  <div className="relative">
                    {/* Image with red border */}
                    <img
                      className="title w-full object-cover"
                      src={Title_Home}
                      alt="Titre"
                    />
                    {/* Text overlay for larger screens */}
                    <div className="absolute inset-0 hidden sm:flex items-center justify-center">
                      <p className="text-white text-left text-lg sm:text-xl md:text-2xl lg:text-3xl p-4 ml-5">
                        Découvrez nos solutions de chauffage écologiques avec
                        des pompes à chaleur performantes pour une énergie verte
                        et durable. Optimisez votre confort tout en réduisant
                        votre empreinte carbone.
                      </p>
                    </div>
                    {/* Text below the image for small screens */}
                    <div className="sm:hidden p-4">
                      <p className="text-left text-gray-700 text-sm">
                        Découvrez nos solutions de chauffage écologiques avec
                        des pompes à chaleur performantes pour une énergie verte
                        et durable. Optimisez votre confort tout en réduisant
                        votre empreinte carbone.
                      </p>
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
