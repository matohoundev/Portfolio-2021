import React, { Component } from 'react';
import './slideshow.scss'

export class Slideshow extends Component {
    render() {
        return (
            <div className="slideshow">
                <div className="first-slideshow">Html javascript Css</div>
                <div className="second-slideshow">Symfony php materialize</div>
                <div className="third-slideshow">React.js Google Firebase UI design</div>
                <div className="fourth-slideshow">Sql Jquery Bootstrap</div>
                <div className="fifth-slideshow">UX design Scss Wordpress Vue.js </div>
            </div>
        )
    }
}

export default Slideshow;
