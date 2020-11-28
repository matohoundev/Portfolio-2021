import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import nav from './nav.svg';
import './nav.scss';

export class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav>
                    <Link to="/" className="navbar-brand">AM</Link>
                    <button className="navbar-toggler">
                        <img src={nav} alt="" className="svg"/>
                    </button> 
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
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;
