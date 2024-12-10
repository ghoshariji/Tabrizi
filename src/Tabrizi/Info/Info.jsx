import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Icon_Chauffage from "../Images/Icon_Chauffage.svg";
import Icon_Sanitaire from "../Images/Icon_Sanitaire.svg";
import Icon_Depannage from "../Images/Icon_Depannage.svg";
import Photo_Info from "../Images/Photo_Info.png";
import "./Info.css";
import red from "../../assets/red.jpg";
import blue from "../../assets/blue.jpg";
const Info = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

    const services = [
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
    <section id="info">
    <div className="info">
      {/* Service Boxes */}
      <div className="container-box flex flex-wrap justify-evenly items-center gap-6 px-4 sm:px-6 md:px-8">
        {services.map((service) => (
          <div
            className="box relative w-full max-w-[380px] bg-gray-800 rounded-md p-6 flex flex-col justify-between transition-all duration-300"
            key={service.id}
          >
            <FontAwesomeIcon
              className="point absolute top-3 left-3 text-2xl"
              icon={faCircle}
              style={{ color: service.color }}
            />
            <h2 className="mt-8 ml-6 text-white font-rubik text-2xl font-light">
              {service.title}
            </h2>
            <button
              className="mt-4 px-6 py-2 text-white rounded-md text-base font-light transition-colors duration-300"
              style={{
                background:
                  hoveredButton === service.id
                    ? service.hoverColor
                    : service.color,
              }}
              onMouseEnter={() => setHoveredButton(service.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Découvrir
            </button>
            <img
              src={service.icon}
              alt={service.alt}
              className="mt-4 w-16 self-end"
            />
          </div>
        ))}
      </div>

      <div className="container-info flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="container-image w-full md:w-2/5">
          <img
            src={Photo_Info}
            alt="Illustration d'un homme qui discute"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="container-text">
          {/* Red Comma */}
          <img src={red} alt="Red comma" className="red" />

          <p className="text">
            "Chez AG Sanitaire, nous offrons des solutions de qualité pour vos
            besoins en installations sanitaires, chauffage et dépannage. Notre
            équipe veille à respecter les normes et à optimiser l'efficacité
            énergétique. Faites confiance à notre expertise pour un confort
            durable et adapté à votre budget."
          </p>

          {/* Blue Comma */}
          <img src={blue} alt="Blue comma" className="blue" />
        </div>
      </div>
    </div>
    </section>
  );
};

  export default Info;