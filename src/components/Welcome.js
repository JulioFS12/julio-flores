import React from 'react';
import { welcomeImg } from '../assets/images';

export const Welcome = () => {
    return (
        <section id="welcome" className="animate__animated animate__backInDown welcome-container">
            <div className="welcome-container__title">
                <h2 >Hi,  welcome</h2>
                <p>I'm Julio Flores, Junior Frontend and Backend Developer, I enojoy coding and I love the server side. This is my CV and Porfolio &#129299;.</p>
            </div>
            <div className="welcome-container__images">
                <img src={welcomeImg} alt="welcome"/>
            </div>
        </section>
    )
}
