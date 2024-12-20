import React, { useEffect, useState } from "react";
import Image_Contact from "../Images/Image_Contact.svg";
import "./Contact.css";

const Contact = ({ val }) => {
  const [message, setMessage] = useState("");

  // Effect to update the message when `val` changes
  useEffect(() => {
    if (val) {
      setMessage(`Je suis intéressé par ${val}`);
    }
  }, [val]);

  return (
    <section id="contact">
      <div className="contact w-full py-[150px] bg-[#1A1A1A] overflow-hidden relative">
        <div className="container max-w-[1320px] mx-auto flex flex-col sm:flex-row px-5 sm:px-10 md:px-20 relative">
          <div className="container-text w-full sm:w-1/2 mb-10 z-10 relative">
            <p className="mb-12 text-white font-Rubik text-4xl font-light text-center sm:text-left">
              Contactez-nous
            </p>

            {/* Form Fields */}
            <div className="container-contact w-full flex flex-wrap sm:justify-between sm:space-x-0">
              <div className="input-box w-full sm:w-[48%] mb-5 flex flex-col">
                <label className="text-white text-base font-normal mb-1 sm:text-left text-left">
                  E-mail
                </label>
                <input
                  type="text"
                  className="w-full h-[40px] p-3 border-none bg-[#575757] text-white font-Rubik text-base outline-none"
                />
              </div>
              <div className="input-box w-full sm:w-[48%] mb-5 flex flex-col">
                <label className="text-white text-base font-normal mb-1 sm:text-left text-left">
                  Numéro de téléphone
                </label>
                <input
                  type="text"
                  className="w-full h-[40px] p-3 border-none bg-[#575757] text-white font-Rubik text-base outline-none"
                />
              </div>
            </div>

            <div className="input-box-message w-full mb-5 flex flex-col">
              <label className="text-white text-base font-normal mb-1 sm:text-left text-left">
                Votre message
              </label>
              <textarea
                value={message} // Setting dynamic message
                onChange={(e) => setMessage(e.target.value)} // Allow user to edit the message if needed
                className="w-full h-[150px] p-3 border-none bg-[#575757] text-white font-Rubik text-base outline-none resize-none"
              />
            </div>

            <div className="container-btn mt-10 flex justify-end sm:justify-end">
              <button className="px-[40px] py-[7.5px] bg-[#E32021] text-white font-Rubik text-base font-normal transition-all duration-300 hover:bg-[#B71C1C]">
                Envoyer
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 right-[-10%] z-20 w-full sm:w-[70%] lg:w-[60%] overflow-hidden transform sm:translate-x-[10%] translate-x-[30%] translate-y-[100px]">
            <img
              className="w-[493px] h-[493px] sm:w-[600px] sm:h-[600px] object-contain"
              src={Image_Contact}
              alt="Maison avec une flamme"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
