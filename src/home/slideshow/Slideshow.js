import React, { Component } from 'react';
import './slideshow.scss'

export class Slideshow extends Component {
    render() {
        return (
            <div className="slideshow">
                <div className="first-slideshow"><p><mark>Html javascript Css</mark></p></div>
                <div className="second-slideshow"><p>Symfony php materialize</p></div>
                <div className="third-slideshow"><p><mark>React.js</mark> Google Firebase <mark>UI-design</mark></p></div>
                <div className="fourth-slideshow"><p>Sql Jquery <mark>Bootstrap</mark></p></div>
                <div className="fifth-slideshow"><p><mark>UX-design</mark> <mark>Scss</mark> Wordpress Vue.js </p></div>
            </div>
        )
    }
}

export default Slideshow;
