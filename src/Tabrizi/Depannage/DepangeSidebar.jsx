import React from "react";
import { FaBars, FaHome, FaInfo, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DepSidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  // Scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleSidebar(); // Close sidebar after scrolling
  };
  const handleScroll1 = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    // Navigate to the new page
    navigate("/");

    // After the page has loaded, scroll to the specific section
    setTimeout(() => handleScroll1("comma"), 200); // 200ms delay for the page load
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white w-64 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50 shadow-lg`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-12">
        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => navigate("/")}        >
          <span className="text-lg">Accueil</span>
        </div>
        {/* <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => scrollToSection("info")}
        >
          <span className="text-lg">Nos prestations</span>
        </div> */}

        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => navigate("/sanitaire")}
        >
          <span className="text-lg">Sanitaire</span>
        </div>

        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => navigate("/depannage")}
        >
          <span className="text-lg">Depannage</span>
        </div>

        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => navigate("/chauffage")}
        >
          <span className="text-lg">Chauffage</span>
        </div>
        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg">À propos</span>
        </div>
        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          <span className="text-lg">Contactez-nous</span>
        </div>
      </div>
    </div>
  );
};

export default DepSidebar;
