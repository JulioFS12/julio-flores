import React from 'react';
import { dbBack } from '../database/dbBack';
import { dbFront } from '../database/dbFront';

export const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h2 className="skills__title">
                <span>Ski</span>lls
            </h2>
            <section className="skills-container">
                <div className="skills-container__card-container">
                    {
                        dbFront.map((item, index) => (
                            <Card key={ index } item={ item } />
                        ))
                    }
                </div>
                <div className="skills-container__card-container">
                {
                        dbBack.map((item, index) => (
                            <Card key={ index } item={ item } />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}


const Card = ( {item} ) => {

    const { name, description, icon } = item;

    return (
        <div className="skills-container__card">
            <div className="skills-container__logo">
                <img src={icon} alt="language" />
            </div>
            <div className="skills-container__info">
                <h3>{ name }</h3>
                <p>{ description }</p>
            </div>
        </div>
    )
}