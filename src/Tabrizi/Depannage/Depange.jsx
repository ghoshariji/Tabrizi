import React, { useState } from "react";
import Background from "./Image/Background-Image.jpeg";
import Title_Home from "./Image/depange.svg";
import "./Depange.css";
import DepangeHeader from "./DepangeHeader";
import Contact from "../Contact/Contact";
import img1 from "./Image/image1.png";
import img2 from "./Image/image2.png";
import img3 from "./Image/image3.png";
const Depange = () => {
  const infoCards = [
    {
      title: "RECHERCHE DE FUITE",
      img: `${img1}`, // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Localisez et réparez les fuites rapidement !", // Replace with actual icon path
      description:
        "Grâce à nos équipements spécialisés, nous détectons nous détectons les fuites invisibles sans dégâts inutiles. Économisez temps et argent avec un diagnostic précis et des réparations durables.",
    },
    {
      title: "CHAUFFAGE MOBILE",
      img: `${img2}`, // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Des solutions de chauffage temporaire pour vous !", // Replace with actual icon path
      // Replace with actual icon path
      description:
        "Nous vous fournissons des chauffages mobiles performants pour les périodes de travaux, d'événements ou en cas de panne prolongée. Profitez d’un confort thermique immédiat, où que vous soyez.",
    },
    {
      title: "URGENCE",
      img: `${img3}`, // Replace with actual image path
      icon: "path/to/icon_image.png",
      title1: "Une assistance rapide en cas de panne !", // Replace with actual icon path
      // Replace with actual icon path
      description:
        "Nos équipes interviennent rapidemment pour résoudre vos problèmes de chauffage ou de plomberie. Faites confiance à notre réactivité et à notre expertise pour un dépannage efficace et sécurisé.",
    },
  ];

  return (
    <div>
      <section id="home">
        <div className="">
          <DepangeHeader />
        </div>

        <div className="home">
          <div className="background-img">
            <img src={Background} alt="Fond" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="background">
            <div className="container">
              <div>
                <img className="title" src={Title_Home} alt="Titre" />
              </div>
            </div>
          </div>
        </div>

        <div className="depange-container">
          {infoCards.map((card, index) => (
            <div key={index}>
              <div className="item-dev relative">
                {/* Blue Icon Circle on Left */}
                <div className="absolute left-8 top-8 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-0.5 w-4 h-4 rounded-full"></div>


                {/* Card Title */}

                {/* Image Section */}
                <div className="relative mb-4 p-5 mt-10">
                  <h3 className="text-2xl font-bold text-white mb-14 mt-4 text-center">
                    {card.title}
                  </h3>
                  <div className="item-border-dep image23">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Title1 */}
                  <h4 className="text-xl font-semibold text-white mb-4 px-5 text-left">
                    {card.title1}
                  </h4>

                  {/* Description */}
                  <p className="text-white mb-10 px-5 text-left">
                    {card.description}
                  </p>
                </div>




              </div>
            </div>
          ))}
        </div>

        <Contact />
      </section>
    </div>
  );
};

export default Depange;
