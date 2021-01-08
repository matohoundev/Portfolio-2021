import React, { Component } from 'react';
import Footer from '../starter/footer/Footer';
import './mission.scss';

export class Mission extends Component {
    render() {
        return (
            <div className="mission" data-aos="mission-slide">
                <header className="head-mission">
                    <h3 className="h3-rainy"
                        data-aos="fade"
                        data-aos-duration="1000"
                    >Rainy<b className="b-rainy">Day</b>
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
                        <p>RainyDay est une plate-forme de suivi pour la télévision et les films. Il permet aux utilisateurs de suivre ce qu'ils regardent, RainyDay permet également aux utilisateurs de réagir  et de commenter des épisodes au sein de la communauté du site. Les utilisateurs ne peuvent pas regarder des émissions ou des films avec RainyDay. </p>
                    </article>
                    <div className="half-mission-img">
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
