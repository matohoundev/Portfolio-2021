import React, { Component, Fragment } from 'react';
import Tech from './skills/Tech';
import './contact.scss'

export class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className="slide-base slide-contact"
                    data-aos="contact-slide"
                    data-aos-duration="1800"
                ></div>

                <div id="contact" className="reset-contact" data-aos="position-reset" data-aos-delay="300">
                    <div className="contact-main bg-real"
                        data-aos="fade-right"
                    >
                        <h3>Démarrons un projet ensemble</h3>
                        <div className="contact-link">
                            <a className="email" href="mailto:matohoundev@gmail.com">matohoundev@gmail.com</a>
                            <span className="hand-left">👈</span>
                        </div>
                        <Tech />
                    </div>
                </div>
                
            </Fragment>
        )
    }
}

export default Contact;
