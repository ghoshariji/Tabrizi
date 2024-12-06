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
      <div className="container-box">
        {box.map((item) => (
          <div className="box" key={item.id}>
            <FontAwesomeIcon
              className="point"
              icon={faCircle}
              style={{ color: item.color }}
            />
            <h2>{item.title}</h2>
            <button
              style={{
                background:
                  hoveredButton === item.id ? item.hoverColor : item.color,
              }}
              onMouseEnter={() => setHoveredButton(item.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Découvrir
            </button>
            <img src={item.icon} alt={item.alt} />
          </div>
        ))}
      </div>

      <div className="container-info">
        <div className="container-image">
          <img src={Photo_Info} alt="Illustration d'un homme qui discuste" />
        </div>
        <div className="container-text relative">
          <span className="absolute text-blue-500 text-8xl top-[-30px] left-[-20px]">
            ‘‘
          </span>
          <p>
            "Chez AG Sanitaire, nous offrons
            <br />
            des solutions de qualité pour vos
            <br />
            besoins en installations sanitaires,
            <br />
            chauffage et dépannage. Notre équipe
            <br />
            veille à respecter les normes et à<br />
            optimiser l'efficacité énergétique.
            <br />
            Faites confiance à notre expertise
            <br />
            pour un confort durable et adapté à<br />
            votre budget."
          </p>
          <span className="absolute text-red-500 text-8xl bottom-[-30px] right-[-20px]">
            ’’
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
