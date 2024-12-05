import React from 'react';
import Background from "../Images/Background.jpg";
import Title_Home from "../Images/Title_Home.svg";
import Info from '../Info/Info';
import Contact from '../Contact/Contact';
import './Home.css';

const Home = () => {

    return (
        <>
            <div className='home'>
                <div className='background-img'>
                    <img src={Background} alt="Fond" />
                </div>
                <div className='background'>
                    <div className='container'>
                        <div>
                            <img className='title' src={Title_Home} alt="Titre" />
                            <p>AG Sanitaire Chauffage vous accompagne dans tous vos projets,<br />en vous proposant des solutions de chauffage performantes,<br />économiques et parfaitement adaptées à vos besoins spécifiques<br />pour un confort optimal en toute saison.</p>
                            <button>À propos de nous</button>
                        </div>
                    </div>
                </div>
            </div>

            <Info/>

            <Contact/>
        </>
    );
};

export default Home;
