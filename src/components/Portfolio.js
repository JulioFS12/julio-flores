import React from 'react';
import { dbPorfolio } from '../database/dbPortfolio';

export const Portfolio = () => {
    return (
        <section className="education">
            <div className="education__card">
                <div className="education__top">
                    <h2 className="education__title">
                        Portfolio
                    </h2>
                    <hr />
                </div>
                <div className="certification">
                    {
                        dbPorfolio.map((item, index) => (
                            <Card key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const Card = ({ item }) => {

        const { title, description, url, img } = item;

    return (
            <div className="certification__container">
                <div className="portolio__img">
                    <img src={img} alt="certification" />
                </div>
                <div className="certification__title">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="education__item__space">
                        View More...
                    </a>
                </div>
            </div>
    )
}