import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Icon_Chauffage from "../Images/Icon_Chauffage.svg";
import Icon_Sanitaire from "../Images/Icon_Sanitaire.svg";
import Icon_Depannage from "../Images/Icon_Depannage.svg";
import Photo_Info from "../Images/Photo_Info.png";
import "./Info.css";

const Info = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const box = [
    {
      id: 1,
      title: "Chauffage",
      color: "#E32021",
      hoverColor: "#B71C1C",
      icon: Icon_Chauffage,
      alt: "Icône du chauffage",
    },
    {
      id: 2,
      title: "Sanitaire",
      color: "#007BFF",
      hoverColor: "#0056b3",
      icon: Icon_Sanitaire,
      alt: "Icône du sanitaire",
    },
    {
      id: 3,
      title: "Dépannage",
      color: "#28A745",
      hoverColor: "#1e7e34",
      icon: Icon_Depannage,
      alt: "Icône du dépannage",
    },
  ];

  return (
    <div className="info">
      {/* Service Boxes */}
      <div className="container-box flex flex-wrap justify-evenly items-center gap-6 px-4 sm:px-6 md:px-8">
        {box.map((item) => (
          <div
            className="box relative w-full max-w-[380px] bg-gray-800 rounded-md p-6 flex flex-col justify-between transition-all duration-300"
            key={item.id}
          >
            <FontAwesomeIcon
              className="point absolute top-3 left-3 text-2xl"
              icon={faCircle}
              style={{ color: item.color }}
            />
            <h2 className="mt-8 ml-6 text-white font-rubik text-2xl font-light">
              {item.title}
            </h2>
            <button
              className="mt-4 px-6 py-2 text-white rounded-md text-base font-light transition-colors duration-300"
              style={{
                background: hoveredButton === item.id ? item.hoverColor : item.color,
              }}
              onMouseEnter={() => setHoveredButton(item.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Découvrir
            </button>
            <img src={item.icon} alt={item.alt} className="mt-4 w-16 self-end" />
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="container-info">
        {/* Image Section */}
        <div className="container-image">
          <img src={Photo_Info} alt="Illustration d'un homme qui discute" />
        </div>

        {/* Text Section */}
        <div className="container-text relative text-center md:text-left">
          {/* Top-left Comma */}
          <span
            className="hidden md:block absolute text-red-500 text-[10rem] leading-none top-[-130px] left-[-50px] rotate-[0deg]"
          >
            ,,
          </span>
          <span
            className="block md:hidden absolute text-red-500 text-[5rem] leading-none top-[-80px] left-[5px] rotate-[0deg]"
          >
            ,,
          </span>

          {/* Quote Text */}
          <p className="text-lg md:text-xl lg:text-2xl px-4 md:px-0 leading-relaxed mt-10 mb-10">
            "Chez AG Sanitaire, nous offrons
            <br />
            des solutions de qualité pour vos
            <br />
            besoins en installations sanitaires,
            <br />
            chauffage et dépannage. Notre équipe
            <br />
            veille à respecter les normes et à
            <br />
            optimiser l'efficacité énergétique.
            <br />
            Faites confiance à notre expertise
            <br />
            pour un confort durable et adapté à
            <br />
            votre budget."
          </p>

          {/* Bottom-right Comma */}
          <span
            className="hidden md:block absolute text-blue-500 text-[8rem] lg:text-[12rem] leading-none bottom-[-10px] sm:bottom-[-30px] right-[10px] sm:right-[50px] rotate-[0deg]"
          >
            ,,
          </span>
          <span
            className="block md:hidden absolute text-blue-500 text-[4rem] leading-none bottom-[10px] sm:bottom-[20px] right-[40px] sm:right-[30px] rotate-[0deg]"
          >
            ,,
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
