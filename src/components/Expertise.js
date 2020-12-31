import React from 'react';
import { expertise } from '../database/dbExpertise';

export const Expertise = () => {
    return (
        <div className="expertise">
            <h2 className="expertise__ title">
                Knowledge
            </h2>
            <section className="expertise__container">
                {
                    expertise.map((item, index) => (
                        <Card key={ index } item={ item } />
                    ))
                }
            </section>
        </div>
    )
}

const Card = ( {item} ) => {

    const { title, description } = item;

    return (
        <div className="expertise__container__card">
            <div className="expertise-container__title">
                <h3>{title}</h3>
            </div>
            <div className="expertise__container__txt">
                <p>{description}</p>
            </div>
        </div>
    )
}