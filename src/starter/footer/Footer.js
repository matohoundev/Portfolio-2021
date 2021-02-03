import React, { Component } from 'react';
import Gmail from '../../assets/icons/gmail.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github.svg';
import './footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="mailto:matohoundev@gmail.com"><img src={Gmail} alt="icon Gmail" className="icons" /></a>
                <a href="https://www.linkedin.com/in/marvin-atohoun/"><img src={Linkedin} alt="icon Linkedin" className="icons" /></a>
                <a href="https://github.com/matohoundev?tab=repositories"><img src={Github} alt="icon Github" className="icons" /></a>
            </div>
        )
    }
}

export default Footer;
