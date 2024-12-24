import React, { useState } from "react";
import Background from "./image/background-Image.jpeg";
import Title_Home from "./image/chaufage.svg";
import Title_Hom from "./image/chaufage1.svg";
import Title_Home1 from "./image1.png";
import Title_Home2 from "./image.png";
import Contact from "../Contact/Contact";
import "./Chauffage.css";
import HeaderChauffage from "./HeaderChauffage.jsx";
import img1 from "./image/image1.png";
import img2 from "./image/image2.png";
import img3 from "./image/image3.png";
import img4 from "./image/image4.png";
import { FaTimes } from "react-icons/fa";
import ChaSidebar from "./ChauSidebar.jsx";

const Chauffage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
              <div className="relative w-full sm:w-[80%] md:w-[85%] lg:w-[90%] xl:w-[55%] mx-auto lg:my-8 pt-4 md:mt-14 lg:mt-14">
                {/* First Image (Visible on Large and Medium Screens) */}
                <img
                  className="w-full sm:h-auto md:h-auto lg:h-auto object-cover hidden md:block mt-5"
                  src={Title_Home}
                  srcSet={`
      ${Title_Home} 1024w, 
      ${Title_Home1} 768w, 
      ${Title_Home2} 480w
    `}
                  sizes="(min-width: 1024px) 90vw, 
           (min-width: 768px) 110vw, 
           (max-width: 767px) 130vw"
                  alt="Titre"
                  style={{
                    maxWidth: "1260px", // Limit the max width on larger screens
                    width: "100%",
                  }}
                />

                {/* Second Image (Visible only on Small Screens) */}
                <img
                  className="w-full sm:h-auto md:h-auto lg:h-auto object-cover block md:hidden"
                  src={Title_Hom}
                  alt="Small Screen Title"
                  style={{
                    width: "90%",
                    maxWidth: "450px",
                    marginBottom: 0, // Remove extra margin below the image
                  }}
                />

                {/* Text over the image */}
                <div className="absolute inset-0 flex flex-col lg:items-center md:items-center justify-center text-white px-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  lg:text-center sm:text-[18px] md:text-[30px] lg:text-[40px] xl:text-[40px]  lg:text-left lg:mt-4 xl:mt-10 lg:mr-20 md:mr-20">
                    CHAUFFAGE
                  </h1>

                  <p className="text-xs sm:text-[12px] md:text-sm lg:text-lg text-left sm:px-6 lg:px-12 leading-relaxed w-full font-rubik">
                    Découvrez nos solutions de chauffage écologiques avec des
                    pompes à chaleur performantes pour une énergie verte et
                    durable.
                    <br />
                    Optimisez votre confort tout en réduisant votre empreinte
                    carbone.
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
