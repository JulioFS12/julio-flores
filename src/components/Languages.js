import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faLanguage } from '@fortawesome/free-solid-svg-icons';

export const Languages = () => {
    return (
        <section className="aside-card">
            <div className="aside-card__title">
                <h2>
                    <FontAwesomeIcon icon={faGlobeAmericas} className="icon" /> Languages
                </h2>
            </div>
            <ul className="aside-card__list">
                <li className="aside-card__item">
                    <FontAwesomeIcon icon={faLanguage} className="icon" />  Spanish: Native
                </li>
                <li className="aside-card__item">
                    <FontAwesomeIcon icon={faLanguage} className="icon" />  English: A2
                </li>
            </ul>
        </section>
    )
}
