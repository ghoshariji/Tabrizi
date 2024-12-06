import React, { useState } from 'react';
import Background from "../Images/Background.jpg";
import Title_Home from "../Images/Title_Home.svg";
import Info from '../Info/Info';
import Contact from '../Contact/Contact';
import Header from '../Header/Header'; // Assuming you have a Header component
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the sidebar toggle
import './Home.css';
import Sidebar from '../Sidebar';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Header */}
      <div className="">
        <Header />
      </div>

      {/* Button to Open Sidebar (Top-Right Corner) - Only on small screens */}
      <button
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        className="fixed top-4 right-4 text-white p-3 mr-5 text-2xl z-50 md:hidden"  // `md:hidden` hides it on medium and larger screens
      >
        {isSidebarOpen ? (
          <FaTimes className="text-2xl mb-5" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      <div className='home'>
        <div className='background-img'>
          <img src={Background} alt="Fond" />
        </div>
        <div className='background'>
          <div className='container'>
            <div>
              <img className='title' src={Title_Home} alt="Titre" />
              <p>
                AG Sanitaire Chauffage vous accompagne dans tous vos projets,
                <br />en vous proposant des solutions de chauffage performantes,
                <br />économiques et parfaitement adaptées à vos besoins spécifiques
                <br />pour un confort optimal en toute saison.
              </p>
              <button>À propos de nous</button>
            </div>
          </div>
        </div>
      </div>

      <Info />
      <Contact />
    </>
  );
};

export default Home;
