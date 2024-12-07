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
                background: hoveredButton === service.id ? service.hoverColor : service.color,
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

      {/* Info Section */}
      <div className="container-info">
        <div className="container-image">
          <img src={Photo_Info} alt="Illustration d'un homme qui discute" />
        </div>

        <div className="container-text relative text-center md:text-left">
          {/* Red Comma SVG */}
          <svg
            className="hidden md:block absolute text-red-500 text-[10rem] leading-none top-[-100px] left-[-30px] sm:bottom-[-50px] sm:left-0"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 25L0.847869 17.8471C1.10627 15.7901 1.63114 13.6512 2.42248 11.4306C3.21382 9.18653 4.19089 7.07106 5.35368 5.08415C6.51647 3.07387 7.77616 1.37915 9.13275 0L12.718 3.82188C11.5714 5.90229 10.5459 8.0762 9.64147 10.3436C8.73708 12.5877 8.13146 15.0654 7.82461 17.777L6.97674 25H0ZM12.282 25L13.1298 17.8471C13.3882 15.7901 13.9131 13.6512 14.7045 11.4306C15.4958 9.18653 16.4729 7.07106 17.6357 5.08415C18.7985 3.07387 20.0581 1.37915 21.4147 0L25 3.82188C23.8534 5.90229 22.8278 8.0762 21.9234 10.3436C21.0191 12.5877 20.4134 15.0654 20.1066 17.777L19.2587 25H12.282Z"
              fill="#E32021"
            />
          </svg>

          <svg
            className="block md:hidden absolute text-red-500 text-[5rem] leading-none top-[-70px] left-[5px] rotate-[0deg]"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 25L0.847869 17.8471C1.10627 15.7901 1.63114 13.6512 2.42248 11.4306C3.21382 9.18653 4.19089 7.07106 5.35368 5.08415C6.51647 3.07387 7.77616 1.37915 9.13275 0L12.718 3.82188C11.5714 5.90229 10.5459 8.0762 9.64147 10.3436C8.73708 12.5877 8.13146 15.0654 7.82461 17.777L6.97674 25H0ZM12.282 25L13.1298 17.8471C13.3882 15.7901 13.9131 13.6512 14.7045 11.4306C15.4958 9.18653 16.4729 7.07106 17.6357 5.08415C18.7985 3.07387 20.0581 1.37915 21.4147 0L25 3.82188C23.8534 5.90229 22.8278 8.0762 21.9234 10.3436C21.0191 12.5877 20.4134 15.0654 20.1066 17.777L19.2587 25H12.282Z"
              fill="#E32021"
            />
          </svg>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-10 mb-10 max-w-4xl">
            "Chez AG Sanitaire, nous offrons des solutions de qualité pour vos
            besoins en installations sanitaires, chauffage et dépannage. Notre
            équipe veille à respecter les normes et à optimiser l'efficacité
            énergétique. Faites confiance à notre expertise pour un confort
            durable et adapté à votre budget."
          </p>

          {/* Blue Comma SVG */}
          <svg
  className="blue-comma absolute text-blue-500 text-[8rem] lg:text-[12rem] leading-none bottom-[-60px] sm:bottom-[-70px] right-[10px] sm:right-[50px] rotate-[0deg]"
  width="25"
  height="25"
  viewBox="0 0 25 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M25 25L24.1521 17.8471C23.8937 15.7901 23.3689 13.6512 22.5775 11.4306C21.7862 9.18653 20.8091 7.07106 19.6463 5.08415C18.4835 3.07387 17.2238 1.37915 15.8672 0L12.282 3.82188C13.4286 5.90229 14.4541 8.0762 15.3585 10.3436C16.2629 12.5877 16.8685 15.0654 17.1754 17.777L18.0233 25H25ZM12.718 25L11.8702 17.8471C11.6118 15.7901 11.0869 13.6512 10.2955 11.4306C9.5042 9.18653 8.52713 7.07106 7.36434 5.08415C6.20155 3.07387 4.94186 1.37915 3.58527 0L0 3.82188C1.14664 5.90229 2.17216 8.0762 3.07655 10.3436C3.98094 12.5877 4.58656 15.0654 4.89341 17.777L5.74128 25H12.718Z"
    fill="#0E3388"
  />
</svg>


        </div>
      </div>
    </div>
  );
};

export default Info;
