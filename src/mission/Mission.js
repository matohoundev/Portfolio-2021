import React, { Component } from 'react';
import Footer from '../starter/footer/Footer';
import './mission.scss';

export class Mission extends Component { 
    render() {

        const props = this.props.location.state.mission
        console.log(this.props.location)

        return (
            <div className="mission" data-aos="mission-slide">
                <header className="head-mission">
                    <h3 className={props.cls_h3}
                        data-aos="fade"
                        data-aos-duration="1000"
                    >{props.name}<b className={props.cls_name_half}>{props.name_other_half}</b>
                    </h3>
                </header>

                <div className="head-mission-img" alt=""></div>

                <section className="main-mission">
                    <q className="citation-mission p2"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >Tout est la, <br /> <span className="word-clear">maintenant</span>, à vous de voir
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
                        <div className="cd-1" alt=""></div>
                    </div> 
                    <div className="about-mission" 
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                    >
                        <strong>Mission</strong>
                        <p>Création d’une page d’attente présentant succinctement le studio et son savoir-faire. Focus sur l’animation de certains éléments ainsi que les micro-interactions. Les technologies utilisées sont bara.js – gsap – blotter.js et curtainsJS.</p>
                    </div>
                    <div className="card-mission">
                        <div className="card-part-one" 
                            data-aos="fade-right" 
                            data-aos-duration="800"
                        >
                            <div className="cd-img card-mission-img-type1 mb1 parallax" alt=""></div>
                            <div className="cd-img card-mission-img-type2 mb2 parallax" alt=""></div>
                        </div>
                        <div className="card-part-two" 
                            data-aos="fade-left"
                            data-aos-duration="800"
                        >
                            <div className="cd-img card-mission-img-type3 mb1 parallax" alt=""></div>
                        </div>     
                    </div>
                </section>
                
                <aside></aside>
                <Footer />
            </div>
        )
    }
}

export default Mission;
