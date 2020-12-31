import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
    return (
        <section className="aside-card">
            <div className="aside-card__title">
            <h2>
                <FontAwesomeIcon icon={faAddressCard} className="icon" />   Contacts
            </h2>
            </div>
            <ul className="aside-card__list">
                {/* <li className="aside-card__item">
                    <a href="http://web.whatsapp.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="icon icon-yelow" /> + 23423 23423
                    </a>
                </li> */}
                <li className="aside-card__item">
                    <a href="https://gmail.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />  juliocesarflores12@gmail.com
                    </a>
                </li>
                <li className="aside-card__item">
                    <a href="https://goo.gl/maps/MDwmTWbfibKvWwMW6" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faThumbtack} className="icon" /> Maracay - Venezuela
                    </a>
                </li>
                <li className="aside-card__item">
                    <a href="https://www.linkedin.com/in/julio-flores-0631bb184/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />  Linkedin Profile
                    </a>
                </li>
            </ul>
        </section>
    )
}
