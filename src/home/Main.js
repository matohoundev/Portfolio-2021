import React, { Component, Fragment } from 'react';
import Project from './projects/Project';
import ready from '../assets/svg-projects/ready.svg';
import readyTwo from '../assets/svg-projects/readyTwo.svg';
import sephi from '../assets/svg-projects/sephi.svg';
import epaule from '../assets/svg-projects/epaule.svg';
import cloud from '../assets/svg-projects/cloud.svg';
import marvin from '../assets/svg-projects/marvin.svg';
import cuisto from '../assets/svg-projects/cuisto.svg';
import './main.scss';

export class Main extends Component {

    state = {
        projects: [
            {
                id: 1,
                cls_slide: "slide-rainy",
                cls_slide_2: "slide-rainy-2",
                cls_name: "rainyDay",
                cls_h3:"h3-rainy",
                name: "Rainy",
                name_other_half: "Day",
                cls_name_half:"b-rainy",
                cls_mark_name: "mark-tech-rainy",
                tech: "React.js - Bootstrap -Javascript - ",
                tech_other_half: "Firebase",
                cls_card: "card-rainy",
                svg:ready,
                svg_2:readyTwo,
                alt_svg:"Anime kimetsu no yaiba(Demon Slayer) background black",
                alt_svg_2:"Anime Kimetsu no yaiba(Demon Slayer) background yellow",
                cls_svg: "svg-project-rainy",
                cls_svg_2: "svg-project-rainy-2"
            },
            {
                id: 2,
                cls_slide: "slide-figur",
                cls_slide_2: "slide-figur-2",
                cls_name: "figurToys",
                cls_h3:"h3-figur",
                name: "FigurToys",
                cls_mark_name: "mark-tech-figur",
                tech: "Wordpress - Astra - ",
                tech_other_half: "WooCommerce",
                cls_card: "card-figur",
                svg:sephi,
                svg_2:epaule,
                svg_3:cloud,
                alt_svg:"Sephiroth",
                alt_svg_2:"Épaulière sephiroth color pink",
                alt_svg_3:"Cloud Strife de dos",
                cls_svg: "svg-project-figur",
                cls_svg_2: "svg-project-figur-2",
                cls_svg_3: "svg-project-figur-3"
            },
            {
                id: 3,
                cls_slide: "slide-folio",
                cls_slide_2: "slide-folio-2",
                cls_name: "folio",
                cls_h3:"h3-folio",
                name: "Portfolio 2020",
                cls_mark_name: "mark-tech-folio",
                tech: "Bootstrap - Javascript  - Jquery - ",
                tech_other_half: "Php",
                cls_card: "card-folio",
                svg:marvin,
                alt_svg:"Atohoun marvin auteur du site (moi en gros)",
                cls_svg: "svg-project-folio"
            },
            {
                id: 4,
                cls_slide_1: "slide-acacia",
                cls_slide_2: "slide-acacia-2",
                cls_name: "acacia",
                cls_h3:"h3-acacia",
                name: "Acacia",
                cls_mark_name: "mark-tech-acacia",
                tech: "Mvc - Materialize - Javascript  - Jquery - ",
                tech_other_half: "Php",
                cls_card: "card-acacia",
                svg:cuisto,
                alt_svg:"chef cuistot cartoon",
                cls_svg: "svg-project-acacia"
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
                            project_id={projet.id}
                            cls_slide={projet.cls_slide}
                            cls_slide_2={projet.cls_slide_2}
                            cls_name={projet.cls_name}
                            cls_h3={projet.cls_h3}
                            name={projet.name}
                            name_other_half={projet.name_other_half}
                            cls_name_half={projet.cls_name_half}
                            cls_mark_name={projet.cls_mark_name}
                            tech={projet.tech}
                            tech_other_half={projet.tech_other_half}
                            cls_card={projet.cls_card}
                            svg={projet.svg}
                            svg_2={projet.svg_2}
                            svg_3={projet.svg_3}
                            alt_svg={projet.alt_svg}
                            alt_svg_2={projet.alt_svg_2}
                            alt_svg_3={projet.alt_svg_3}
                            cls_svg={projet.cls_svg}
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
