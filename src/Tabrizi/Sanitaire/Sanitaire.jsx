import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Background from "../Images/Sanitaire.svg";
import Title_Home from "../Images/Title_Home.svg";
import SanitaireInfo from "./SanitaireInfo";
import SanitaireHeader from "./SanitaireHeader/SanitaireHeader";
import "./Sanitaire.css";
const Sanitaire = () => {
  const infoCards = [
    {
      title: "RÉNOVATION",
      img: "path/to/renovation_image.png", // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Modernisez vos installations sanitaires !", // Replace with actual icon path
      description:
        "Notre expertise en rénovation vous garantit des installations modernes, fonctionnelles et conformes aux normes. Transformez votre salle de bain ou votre cuisine en espaces élégants et pratiques grâce à des solutions sur-mesure.",
    },
    {
      title: "CONSTRUCTION NEUVE",
      img: "path/to/construction_image.png", // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Des systèmes sanitaires adaptés à vos projets !", // Replace with actual icon path
      // Replace with actual icon path
      description:
        "Nous collaborons avec vous dès la conception pour intégrer des installations sanitaires performantes, économes en énergie et adaptées à vos besoins. Offrez à votre bâtiment un confort optimal.",
    },
    {
      title: "INTRODUCTION EAU/GAZ",
      img: "path/to/eau_gaz_image.png", // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "L’introduction eau/gaz maîtrisée pour votre confort ! ", // Replace with actual icon path
      // Replace with actual icon path
      description:
        "Nous assurons une installation sécurisée et durable des réseaux d’eau et de gaz. Bénéficiez d’un service professionnel pour un raccordement fiable et conforme à vos attentes.",
    },
  ];

  return (
    <div>
      <section id="home">
        <div className="">
          <SanitaireHeader />
        </div>

        <div className="home">
          <div className="background-img">
            <img src={Background} alt="Fond" />
          </div>
          <div className="background">
            <div className="container">
              <div>
                <img className="title" src={Title_Home} alt="Titre" />
              </div>
            </div>
          </div>
        </div>

        <div className="chauffage-container">
          {infoCards.map((card, index) => (
            <div key={index}>
              <div className="item relative">
                {/* Blue Icon Circle on Left */}
                <div className="absolute left-8 top-8 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-3 rounded-full"></div>
                {/* Card Title */}
                <h3 className="text-2xl font-bold text-white mb-4 mt-12 text-center">
                  {card.title}
                </h3>

                {/* Image Section */}
                <div className="relative mb-4 p-5">
                  <div className="item-border image2">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Title1 */}
                <h4 className="text-xl font-semibold text-white mb-4 pl-5 pr-3 text-left">
                  {card.title1}
                </h4>

                {/* Description */}
                <p className="text-white mb-10 p-5 text-left">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Contact />
      </section>
    </div>
  );
};

export default Sanitaire;
