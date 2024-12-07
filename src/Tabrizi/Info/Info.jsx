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
    <div className="info">
      <div className="container-box">
        {services.map((service) => (
          <div
            className="box relative"
            key={service.id}
          >
            <FontAwesomeIcon
              className="point"
              icon={faCircle}
              style={{ color: service.color }}
            />
            <h2>{service.title}</h2>
            <button
              className="mt-4"
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
              className="mt-4"
            />
          </div>
        ))}
      </div>

      <div className="container-info">
        <div className="container-image">
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
  );
};

export default Info;
