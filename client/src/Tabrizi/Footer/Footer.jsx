import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-top">
          <img src={Logo} alt="Logo AG Sanitaire" />
        </div>

        <div className="footer-center">
          <div className="link ml-3">
            <h2>NAVIGATION</h2>
            <ul>
              <li className="text-gray-300">
                <Link to="/">Accueil</Link>
              </li>
              <li className="text-gray-300">
                <Link to="/propos">À propos de nous</Link>
              </li>
              <li className="text-gray-300">
                <Link to="/propos">Contactez-nous</Link>
              </li>
            </ul>
          </div>

          <div className="services ">
            <h2>NOS PRESTATIONS</h2>
            <ul>
              <li className="text-gray-300">Chauffage</li>
              <li className="text-gray-300">Sanitaire</li>
              <li className="text-gray-300">Dépannage</li>
            </ul>
          </div>
          <div className="coord ml-3">
            <h2>NOUS CONTACTEZ</h2>
            <ul>
              <li className="text-gray-300">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <a
                  href="https://www.google.com/maps/place/Ch.+du+Petit-Flon+26a,+1052+Le+Mont-sur-Lausanne,+Suisse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ch. de Liamont 2<br />
                  1059 Peney-le-Jorat, Suisse
                </a>
              </li>
              <li className="text-gray-300">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <a href="tel:+41216474575">+41 79 125 46 46</a>
              </li>
              <li className="text-gray-300">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a href="mailto:info@tabrizisarl.ch">info@agsanitaire.ch</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h2>NOS RÉSEAUX</h2>
            <ul>
              <li className="text-gray-300">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                  Facebook
                </a>
              </li>
              <li className="text-gray-300">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  
                >
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <h3>© 2024 tout droit réservé à AG Sanitaire Sàrl.</h3>
          <h4>
            <span>
              <FontAwesomeIcon icon={faHammer} />
            </span>{" "}
            Conçu par LogixMédia
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
