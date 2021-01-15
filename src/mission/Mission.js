import React, { Component } from 'react';
import Carousel from './carousel/Carousel';
import Footer from '../starter/footer/Footer';
import './mission.scss';

export class Mission extends Component { 
    render() {

        const props = this.props.location.state.mission

        return (
            <div className="mission" data-aos="mission-slide">
                <header className="head-mission">
                    <h3 className={props.cls_h3}
                        data-aos="fade"
                        data-aos-duration="1000"
                    >{props.name}<b className={props.cls_name_half}>{props.name_other_half}</b>
                    </h3>
                </header>

                <div className={`head-mission-img parallax ${props.cls_head_img}`} alt=""></div>

                <section className="main-mission">
                    <q className="citation-mission"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >{props.citation}
                    </q>

                    <article className="synopsis" 
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                    >
                        <strong>Qui sont-ils ?</strong>
                        <p>{props.synopsis}</p>
                    </article>

                    <div className="half-mission-img"
                        data-aos="fade-up"
                        data-aos-duration="800" 
                    >
                        <div className={`cd-1 parallax ${props.cls_half_img}`} alt=""></div>
                    </div> 

                    <div className="about-mission" 
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                    >
                        <strong>Mission</strong>
                        <p>{props.mission}</p>
                    </div>

                    <div className="card-mission">
                        <div className="card-part-one" 
                            data-aos="fade-right" 
                            data-aos-duration="800"
                        >
                            <div className={`cd-img card-mission-img-type1 parallax ${props.cls_img}`}></div>
                            <div className={`cd-img card-mission-img-type2 parallax ${props.cls_img}`}></div>
                            
                        </div>
                        
                        <div className="card-part-two" 
                            data-aos="fade-left"
                            data-aos-duration="800"
                        >
                            <div className={`cd-img card-mission-img-type3 parallax ${props.cls_img}`}></div>
                        </div>     
                    </div>
                </section>
                
                <Carousel />
                <Footer />
            </div>
        )
    }
}

export default Mission;
