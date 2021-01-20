import React, { Component } from 'react';
import Gmail from '../../assets/icons/gmail.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Github from '../../assets/icons/github.svg';
import './footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="mailto:matohoundev@gmail.com"><img src={Gmail} alt="" className="icons" /></a>
                <a href="https://www.linkedin.com/in/marvin-atohoun/"><img src={Twitter} alt="" className="icons" /></a>
                <a href="https://github.com/matohoundev?tab=repositories"><img src={Github} alt="" className="icons" /></a>
            </div>
        )
    }
}

export default Footer;
