import React, { useEffect, useState } from "react";
import axios from "axios";
import Image_Contact from "../Images/Image_Contact.svg";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Contact = ({ val }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      message: val ? `Je suis intéressé par ${val}` : "",
    }));
  }, [val]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "https://tabrizi.onrender.com/api/contact",
        formData
      );
      if (response.data.success) {
        toast.success("We will contact you soon...");
        setFormData({
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong...");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact">
      <ToastContainer />
      <div className="contact w-full py-[150px] bg-[#1A1A1A] overflow-hidden relative">
        <div className="container max-w-[1320px] mx-auto flex flex-col sm:flex-row px-5 sm:px-10 md:px-20 relative">
          <div className="container-text w-full sm:w-1/2 mb-10 z-10 relative">
            <p className="mb-12 text-white font-Rubik text-4xl font-light text-center sm:text-left">
              Contactez-nous
            </p>
            <form onSubmit={handleSubmit}>
              <div className="container-contact w-full flex flex-wrap sm:justify-between">
                <div className="input-box w-full sm:w-[48%] mb-5 flex flex-col">
                  <label className="text-white text-base font-normal mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-[40px] p-3 border-none bg-[#575757] text-white font-Rubik text-base outline-none"
                    required
                  />
                </div>
                <div className="input-box w-full sm:w-[48%] mb-5 flex flex-col">
                  <label className="text-white text-base font-normal mb-1">
                    Numéro de téléphone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-[40px] p-3 border-none bg-[#575757] text-white font-Rubik text-base outline-none"
                    required
                  />
                </div>
              </div>

              <div className="input-box-message w-full mb-5 flex flex-col">
                <label className="text-white text-base font-normal mb-1">
                  Votre message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-[150px] p-3 border-none bg-[#575757] text-white font-Rubik text-base outline-none resize-none"
                  required
                />
              </div>

              <div className="container-btn mt-10 flex justify-end">
                <button
                  type="submit"
                  className="px-[40px] py-[7.5px] bg-[#E32021] text-white font-Rubik text-base font-normal transition-all duration-300 hover:bg-[#B71C1C] flex items-center justify-center"
                  disabled={loading} // Disable button during loading
                >
                  {loading ? (
                    <span className="loader"></span> // Loader span
                  ) : (
                    "Envoyer"
                  )}
                </button>
              </div>
            </form>
            {status && <p className="mt-5 text-white">{status}</p>}
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
