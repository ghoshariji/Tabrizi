import React from 'react';
import Image_Contact from '../Images/Image_Contact.svg';
import './Contact.css';

const Contact = () => {

    return (
        <div className='contact'>
            <div className='container'>
                <div className='container-text'>
                    <h1>Contactez-nous</h1>

                    <div className='container-contact'>
                        <div className='input-box'>
                            <label htmlFor="">E-mail</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="">Numéro de téléphone</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className='input-box-message'>
                        <label htmlFor="">Votre message</label>
                        <textarea name="" id=""></textarea>
                    </div>

                    <div className='container-btn'>
                        <button>Envoyer</button>
                    </div>
                </div>
                <img className='image' src={Image_Contact} alt="Maison avec une flamme" />
            </div>
        </div>
    );
};

export default Contact;
