import React from 'react';
import { education } from '../database/dbEducation';

export const Education = () => {
    return (
        <section className="education">
            <div className="education__card">
                <div className="education__top">
                    <h2 className="education__title">
                        <span>Educ</span>ation
                    </h2>
                    <hr />
                </div>
                <div className="education__buttom">
                    {
                        education.map((item, index) => (
                            <Card key={index} item={item} />
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}

const Card = ( {item} ) => {

    const { tt, title, name, web, href } = item;

    return (
        <>
            <div className="education__item">
                <div className="education__item__space">
                    <h3 className="education__item__space"> {tt} </h3>
                    <p className="education__item__space">{title}</p>
                    <small className="education__item__space">{name}</small><br />
                    <a href={href} target="_blank" rel="noopener noreferrer" className="education__item__space">{web}</a>
                </div>
            </div>
        </>
    )
}