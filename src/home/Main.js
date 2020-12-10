import React, { Component, Fragment } from 'react';
import Project from './projects/Project';
import './main.scss';

export class Main extends Component {

    state = {
        projects: [
            {
                id: 1,
                cls_slide_1: "slide-rainy",
                cls_slide_2: "slide-rainy-2",
                cls_name: "Rainy Day",
                name: "Rainy Day",
                tech: "React.js - Bootstrap -Javascript - Firebase",
                cls_card: "card-rainy",
                cls_svg_1: "svg-project-rainy",
                cls_svg_2: "svg-project-rainy-2"
            },
            {

            },
            {

            },
            {

            }
        ]
    }

    render() {
        return (
            <Fragment>
                <header className="head-Main">
                    <h1>ATOHOUN MARVIN</h1>
                    <h2>Front-end Developper</h2>
                </header>
                
                <main>
                    <section className="about">
                        <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services. Je réalise des sites internet avec le souci du détail et un rendu ﬁdèle au design.</p>
                    </section>

                    <Project />
                </main>
                
            </Fragment>
        )
    }
}

export default Main;
