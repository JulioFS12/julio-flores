import React from 'react';
import { FaAddressCard, FaEnvelope, FaThumbtack, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
    return (

        <section className="aside-card">
            <div className="aside-card__title">
            <h2>
                <FaAddressCard/>   Contacts
            </h2>
            </div>
            <ul className="aside-card__list">
                <li className="aside-card__item">
                    <a href="https://gmail.com/" target="_blank" rel="noreferrer">
                        <FaEnvelope/>  juliocesarflores12@gmail.com
                    </a>
                </li>
                <li className="aside-card__item">
                    <a href="https://goo.gl/maps/MDwmTWbfibKvWwMW6" target="_blank" rel="noreferrer">
                        <FaThumbtack/> Maracay - Venezuela
                    </a>
                </li>
                <li className="aside-card__item">
                    <a href="https://www.linkedin.com/in/julio-flores-0631bb184/" target="_blank" rel="noreferrer">
                        <FaLinkedin/>  Linkedin Profile
                    </a>
                </li>
            </ul>
        </section>
    )
}
