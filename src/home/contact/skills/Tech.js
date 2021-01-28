import React, { Component } from 'react';
import './Tech.scss'

export class Tech extends Component {
    render() {
        return (
            <div className="Tech"
                data-aos="fade-right" 
            >
                <p><mark>React.js</mark> javascript <mark>UI</mark></p>
                <p>Symfony php materialize <mark>Aos</mark></p>
                <p><mark>Framer-motion</mark> Firebase</p>
                <p>Sql Jquery <mark>Bootstrap</mark> Gsap </p>
                <p><mark>UX</mark>  Wordpress <mark>Scss</mark> Vue.js </p>
            </div>
        )
    }
}

export default Tech;
