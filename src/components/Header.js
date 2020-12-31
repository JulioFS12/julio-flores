import React from 'react';
import {profile } from '../assets/images';

export const Header = () => {
    return (
        <section className="header-section animate__animated animate__backInDown">
            <div className="header-section__image-container">
                <img src={profile} alt='profile' />
            </div>
            <div className="header-section__info-container">
                <h4>HELLO THERE</h4>
                <h2>Julio Flores</h2>
                <h3>Full Stack Developer</h3>
            </div>
        </section>
    )
}
