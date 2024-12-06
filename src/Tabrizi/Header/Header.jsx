import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Images/Logo.svg';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="container-logo">
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo de AG" />
                </Link>
            </div>



            <div className={`container-header ${menuOpen ? 'active' : ''}`}>
                <div className="container-info">
                    <a href="mailto:info@tabrizisarl.ch">info@tabrizisarl.ch</a>
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

                <ul className="container-navigation">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/prestations">Nos prestations</Link>
                    </li>
                    <li>
                        <Link to="/propos">À propos de nous</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contactez-nous</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
