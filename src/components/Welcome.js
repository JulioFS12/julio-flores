import React from 'react';
import { welcomeImg } from '../assets/images';

export const Welcome = () => {
    return (
        <section id="welcome" className="animate__animated animate__backInDown welcome-container">
            <div className="welcome-container__title">
                <h2 >Hello,  welcome</h2>
                <p>I'm Julio Flores, Full Stack Developer and this is my CV and Porfolio</p>
            </div>
            <div className="welcome-container__images">
                <img src={welcomeImg} alt="welcome"/>
            </div>
        </section>
    )
}
