import React, { Component } from 'react';
import './slideTech.scss'

export class SlideTech extends Component {
    render() {
        return (
            <div className="slideTech">
                <div className="first-slideTech" data-aos="fade-left"><p><mark>Html javascript Css</mark></p></div>
                <div className="second-slideTech" data-aos="fade-right"><p>Symfony php materialize Aos</p></div>
                <div className="third-slideTech" data-aos="fade-left"><p><mark>React.js</mark> Google Firebase <mark>UI-design</mark></p></div>
                <div className="fourth-slideTech" data-aos="fade-right"><p>Sql Jquery <mark>Bootstrap</mark> Gsap</p></div>
                <div className="fifth-slideTech" data-aos="fade-left"><p><mark>UX-design</mark> <mark>Scss</mark> Wordpress Vue.js </p></div>
            </div>
        )
    }
}

export default SlideTech;
