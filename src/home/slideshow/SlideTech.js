import React, { Component } from 'react';
import './slideTech.scss'

export class SlideTech extends Component {
    render() {
        return (
            <div className="slideTech">
                <div className="first-slideTech"><p><mark>Html javascript Css</mark></p></div>
                <div className="second-slideTech"><p>Symfony php materialize</p></div>
                <div className="third-slideTech"><p><mark>React.js</mark> Google Firebase <mark>UI-design</mark></p></div>
                <div className="fourth-slideTech"><p>Sql Jquery <mark>Bootstrap</mark></p></div>
                <div className="fifth-slideTech"><p><mark>UX-design</mark> <mark>Scss</mark> Wordpress Vue.js </p></div>
            </div>
        )
    }
}

export default SlideTech;
