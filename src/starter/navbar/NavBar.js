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

        if (window.innerWidth > 500) {
            setToggleMenu(false);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <Fragment>
            <nav>
                <Link to="/" className="navbar-brand">AM</Link>
                <button onClick={toggleNavSmallScreen} className="navbar-toggler">
                    <img src={nav} alt="" className="svg" />
                </button>
                {(toggleMenu || largeur > 500) && (
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="navbar-nav">
                                <Link to="/mission">Projet</Link>
                            </li>
                            <li className="navbar-nav">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                )
                }

            </nav>
        </Fragment>
    )
}

export default Navbar;
