import React from 'react';
import { dbCertification } from '../database/dbCertification';

export const Certification = () => {
    return (
        <section className="education">
            <div className="education__card">
                <div className="education__top">
                    <h2 className="education__title">
                        <span>Certi</span>fications
                    </h2>
                    <hr />
                </div>
                <div className="certification">
                    {
                        dbCertification.map((item, index) => (
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
                <div className="certification__img">
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