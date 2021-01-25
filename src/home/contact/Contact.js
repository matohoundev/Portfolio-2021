import React, { Component, Fragment } from 'react';
import Tech from '../slideshow/Tech';
import './contact.scss'

export class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className="slide-project slide-contact"
                    data-aos="contact-slide"
                ></div>

                <div id="contact" className="contact-main bg-real" 
                    data-aos="fade-right"
                >
                    <h3>Démarrons un projet ensemble</h3>
                    <div className="contact-link">
                        <a className="email" href="mailto:matohoundev@gmail.com">matohoundev@gmail.com</a>
                        <span className="hand-left">👈</span>
                    </div>
                    <Tech />
                </div>
                
            </Fragment>
        )
    }
}

export default Contact;
