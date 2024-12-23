import React, { useState } from "react";
import Background from "./image/background-Image.jpeg";
import Title_Home from "./image/chaufage.svg";
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

          <div className="home relative">
            <div className="background-img relative sm:h-[250vh] md:h-4/5 lg:h-2/5">
              <img
                src={Background}
                alt="Fond"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Second div placed on top of the first div */}
            <div className="absolute inset-0 flex items-center justify-center w-full sm:h-[150vh] md:h-[70vh] lg:h-[60vh] px-4 lg:px-12 lg:mt-20 z-10">
              <div className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto lg:my-8">
                <img
                  className="w-full sm:h-[70vh] md:h-auto lg:h-auto object-cover"
                  src={Title_Home}
                  alt="Titre"
                />
                {/* Text over the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                    CHAUFFAGE
                  </h1>
                  <p className="text-xs sm:text-sm md:text-lg lg:text-lg text-center sm:px-6 lg:px-12 leading-relaxed">
                    Découvrez nos solutions de chauffage écologiques
                    <br className="hidden sm:block" /> avec des pompes à chaleur
                    performantes
                    <br /> pour une énergie verte et durable.
                    <br className="hidden sm:block" /> Optimisez votre confort
                    tout en réduisant votre empreinte carbone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section id="chhauffage-con">
            <div className="chauffage-container">
              <div className="section">
                <h2 className="mt-5">ÉNERGIE VERTE</h2>

                <div className="item">
                  <div
                    className="item-border image1 mt-10"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    onClick={() => contactFunc("Pompe à chaleur air/eau")}
                  >
                    <img src={img1} />
                    <h3
                      style={{
                        fontWeight: 600,
                        fontFamily: "Rubik, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      Pompe à chaleur air/eau
                    </h3>
                  </div>
                </div>

                <div className="item">
                  <div
                    className="item-border image2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    onClick={() => contactFunc("Pompe à chaleur air/air")}
                  >
                    <img src={img2} />
                    <h3
                      style={{
                        fontWeight: 600,
                        fontFamily: "Rubik, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      Pompe à chaleur air/air
                    </h3>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2 className="mt-5">ÉNERGIE FOSSILE</h2>

                <div className="item">
                  <div
                    className="item-border image3 mt-10"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    onClick={() => contactFunc("Chauffage à mazout")}
                  >
                    <img src={img3} />
                    <h3
                      style={{
                        fontWeight: 600,
                        fontFamily: "Rubik, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      Chauffage à mazout
                    </h3>
                  </div>
                </div>

                <div className="item">
                  <div
                    className="item-border image4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    onClick={() => contactFunc("Chauffage à gaz")}
                  >
                    <img src={img4} />
                    <h3
                      style={{
                        fontWeight: 600,
                        fontFamily: "Rubik, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      Chauffage à gaz
                    </h3>
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
