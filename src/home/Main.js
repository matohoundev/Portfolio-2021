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
                cls_name: "rainyDay",
                cls_h3:"h3-rainy",
                name: "Rainy",
                name_other_half: "Day",
                cls_mark_name: "mark-tech-rainy",
                tech: "React.js - Bootstrap -Javascript - ",
                tech_other_half: "Firebase",
                cls_card: "card-rainy",
                cls_svg_1: "svg-project-rainy",
                cls_svg_2: "svg-project-rainy-2"
            },
            {
                id: 2,
                cls_slide_1: "slide-figur",
                cls_slide_2: "slide-figur-2",
                cls_name: "figurToys",
                cls_h3:"h3-figur",
                name: "FigurToys",
                tech: "Wordpress - Astra - ",
                tech_other_half: "WooCommerce",
                cls_card: "card-figur",
                cls_svg_1: "svg-project-figur",
                cls_svg_2: "svg-project-figur-2",
                cls_svg_3: "svg-project-figur-3"
            },
            {
                id: 3,
                cls_slide_1: "slide-folio",
                cls_slide_2: "slide-folio-2",
                cls_name: "folio",
                cls_h3:"h3-folio",
                name: "Portfolio 2020",
                tech: "Bootstrap - Javascript  - Jquery - ",
                tech_other_half: "Php",
                cls_card: "card-folio",
                cls_svg_1: "svg-project-folio"
            },
            {
                id: 4,
                cls_slide_1: "slide-acacia",
                cls_slide_2: "slide-acacia-2",
                cls_name: "acacia",
                cls_h3:"h3-acacia",
                name: "Acacia",
                tech: "Mvc - Materialize - Javascript  - Jquery - ",
                tech_other_half: "Php",
                cls_card: "card-acacia",
                cls_svg_1: "svg-project-acacia"
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

                    {this.state.projects.map(projet => (
                        <Project 
                            key={projet.id}
                            cls_slide_1={projet.cls_slide_1}
                            cls_slide_2={projet.cls_slide_2}
                            cls_name={projet.cls_name}
                            cls_h3={projet.cls_h3}
                            name={projet.name}
                            name_other_half={projet.name_other_half}
                            cls_mark_name={projet.cls_mark_name}
                            tech={projet.tech}
                            tech_other_half={projet.tech_other_half}
                            cls_card={projet.cls_card}
                            cls_svg_1={projet.cls_svg_1}
                            cls_svg_2={projet.cls_svg_2}
                            cls_svg_3={projet.cls_svg_3}
                        />
                        ))}
                    

                </main>
                
            </Fragment>
        )
    }
}

export default Main;
