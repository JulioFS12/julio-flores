import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Certification } from '../components/Certification';
import { Comunication } from '../components/Comunication';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { Expertise } from '../components/Expertise';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Languages } from '../components/Languages';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';
import { SocialMedia } from '../components/SocialMedia';
import { Space } from '../components/Space';
import { Welcome } from '../components/Welcome';
import { setShowSide } from '../redux/actions/ui';

export const Admin = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        window.addEventListener('scroll', () => {

            const scroll = document.documentElement.scrollTop;
            if( scroll >= 1400 && scroll < 1600 ){
                dispatch( setShowSide( true ) );
            } else if( scroll < 1400 && scroll > 1200 ){
                dispatch( setShowSide( false ) );
            }

        })
    }, [dispatch])

    return (
        <div className="main-container">
            <aside className="main-container__aside">
                <Header/>
                <Contact/>
                {/* <Languages/>
                <SocialMedia/>
                <Space/>
                <Comunication/> */}
            </aside>
            <main className="main-container__main">
                <Welcome/>
                {/* <Skills/>
                <Expertise />
                <Education/>
                <Certification/>
                <Portfolio/>
                <Footer/> */}
            </main>
        </div>
    )
}
