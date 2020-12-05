import React, { Component, Fragment } from 'react';
import './mission.scss';

export class Mission extends Component {
    render() {
        return (
            <Fragment>
                <header className="head-mission">
                    <h3 className="h3-rainy">Rainy<b className="b-rainy">Day</b></h3>
                </header>
                <div className="head-mission-img parallax" alt=""></div>
                <section className="main-mission">
                    <article>
                        <p>RainyDay est une plate-forme de suivi pour la télévision et les films. Il permet aux utilisateurs de suivre ce qu'ils regardent, RainyDay permet également aux utilisateurs de réagir  et de commenter des épisodes au sein de la communauté du site. Les utilisateurs ne peuvent pas regarder des émissions ou des films avec RainyDay. </p>
                    </article>
                    <div className="half-mission-img parallax" alt=""></div>
                    <div className="about-mission">
                        <strong>Mission</strong>
                        <p>Création d’une page d’attente présentant succinctement le studio et son savoir-faire. Focus sur l’animation de certains éléments ainsi que les micro-interactions. Les technologies utilisées sont barba.js – gsap – blotter.js et curtainsJS.</p>
                    </div>
                    <div className="mobile-mission">
                        <div className="mobile-mission-img mb1 parallax" alt=""></div>
                            <p className="text-between-mobile">#firstmobile</p>
                        <div className="mobile-mission-img mb2 parallax" alt=""></div>
                    </div>
                </section>
                <aside></aside>
            </Fragment>
        )
    }
}

export default Mission;
