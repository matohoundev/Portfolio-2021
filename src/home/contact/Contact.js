import React, { Component, Fragment } from 'react';
import './contact.scss'

export class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className="contact-main">
                    <h3>Démarrons un projet ensemble</h3>
                    <a className="email" href="mailto:matohoundev@gmail.com">matohoundev@gmail.com</a>
                </div>
            </Fragment>
        )
    }
}

export default Contact;
