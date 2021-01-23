import React, { Component, Fragment } from 'react';
import SlideTech from '../slideshow/SlideTech';
import './contact.scss'

export class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className="slide-project slide-contact"
                    data-aos="contact-slide"
                ></div>

                <div id="contact" className="contact-main">
                    <h3>Démarrons un projet ensemble</h3>
                    <div className="contact-link">
                        <a className="email" href="mailto:matohoundev@gmail.com">matohoundev@gmail.com</a>
                        <span className="hand-left">👈</span>
                    </div>
                </div>
                <SlideTech />
            </Fragment>
        )
    }
}

export default Contact;
