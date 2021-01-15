import React, { Component } from 'react';
import './carousel.scss';

export class Carousel extends Component {
    render() {
        return (
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <h3 className="h3-rainy">Rainy<b className="b-rainy">Day</b></h3>
                    </div>
                    <div className="slide">
                        <h3 className="h3-figur">FigurToys</h3>
                    </div>
                    <div className="slide">
                        <h3 className="h3-folio">Folio2020</h3>
                    </div>
                    <div className="slide">
                        <h3 className="h3-acacia">Acacia</h3>
                    </div>
                    <div className="slide">
                        <h3 className="h3-rainy">Rainy<b className="b-rainy">Day</b></h3>
                    </div>
                    <div className="slide">
                        <h3 className="h3-figur">FigurToys</h3>
                    </div>
                    <div className="slide">
                        <h3 className="h3-folio">Folio2020</h3>
                    </div>
                    <div className="slide">
                        <h3 className="h3-acacia">Acacia</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
