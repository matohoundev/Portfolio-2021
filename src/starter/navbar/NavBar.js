import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import nav from './nav.svg';
import './nav.scss';

export function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        if(window.innerWidth > 1024){
            setToggleMenu(false);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <Fragment>
            { (toggleMenu) && (<div className="nav-bg" data-aos="nav-slide" data-aos-duration="300"></div>)}
            <nav>
                <Link to="/" className="navbar-brand">AM</Link>       
                {(toggleMenu || largeur > 1023) && (
                    <div className="navbar-collapse">
                        <ul className="navbar-nav" data-aos="nav-fade-right" data-aos-duration="300">
                            <li>
                                <Link to="/mission">Projet</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                )
                }
                <button onClick={toggleNavSmallScreen} className="navbar-toggler">
                    <img src={nav} alt="" className="nav-icon"/>
                </button>
            </nav>
        </Fragment>
    )
}

export default Navbar;
