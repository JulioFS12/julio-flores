import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';

export const Comunication = () => {

    const { ShowSideBar } = useSelector(state => state.ui)
    let state = '';

    ShowSideBar
        ? state = 'visible'
        : state = 'hidden'

    return (
        <ul className={state}>
            {/* <li className="visible__item">
                <div className="visible__icon">
                    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                </div>
                <div className="visible__text">
                    <a href="http://web.whatsapp.com/" target="_blank" rel="noreferrer" className="first" >
                        whatsapp
                    </a>
                </div>
            </li> */}
            <li className="visible__item">
                <div className="visible__icon">
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                </div>
                <div className="visible__text">
                    <a href="https://www.linkedin.com/in/julio-flores-0631bb184/" target="_blank" rel="noreferrer" className="first" >
                        linkedin
                    </a>
                </div>
            </li>
            <li className="visible__item">
                <div className="visible__icon">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </div>
                <div className="visible__text">
                    <a href="https://github.com/JulioFS12" target="_blank" rel="noreferrer" className="first" >
                        Github
                    </a>
                </div>
            </li>
            <li className="visible__item">
                <div className="visible__icon">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </div>
                <div className="visible__text">
                    <a href="https://www.instagram.com/jc.floress/?hl=es-la" target="_blank" rel="noreferrer" className="first" >
                        Instagram
                    </a>
                </div>
            </li>
        </ul>
    )
}
