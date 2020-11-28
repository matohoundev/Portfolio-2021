import React, { Component, Fragment } from 'react';
import './footer.scss';

export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer>
                    <div>
                        <p>Atohoun Marvin</p>
                        <p>matohoundev@gmail.com</p>
                    </div>
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/marvin-atohoun/">Linkedin</a></li>
                        <li><a href="https://github.com/matohoundev">Github</a></li>
                    </ul>
                </footer>
            </Fragment>
        )
    }
}

export default Footer;
