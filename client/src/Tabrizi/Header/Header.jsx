import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const naviagte = useNavigate();
  return (
    <header className="lg:border-r lg:border-b lg:border-white md:border-r md:border-b md:border-white border-0 p-0">
      <div className="container-logo">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo de AG" />
        </Link>
      </div>

      <div className={`container-header ${menuOpen ? "active" : ""}`}>
        <div className="container-info">
          <a href="mailto:info@tabrizisarl.ch">info@agsanitaire.ch</a>
          <a href="tel:+41791254646">+41 79 125 46 46</a>
          <a
            href="https://www.google.com/maps/place/Ch.+de+Liamont+2,+1059+Peney-le-Jorat,+Suisse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ch. de Liamont 2, 1059 Peney-le-Jorat
          </a>
          <div className="container-social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div>
          <ul className="container-navigation">
            <li>
              <Link to="/" onClick={() => naviagte("/")}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/sanitaire" onClick={() => naviagte("/sanitaire")}>
                Sanitaire
              </Link>
            </li>
            <li>
              <Link to="/chauffage" onClick={() => naviagte("/chauffage")}>
                Chauffage
              </Link>
            </li>
            <li>
              <Link to="/depannage" onClick={() => naviagte("/depannage")}>
                Depannage
              </Link>
            </li>
            <li>
              <Link  onClick={() => handleScroll("contact")}>
              Contactez-nous
              </Link>
            </li>
            <li>
              <Link onClick={() => handleScroll("comma")}>
              A propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
