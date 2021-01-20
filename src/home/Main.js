import React, { Component, Fragment } from 'react';
import { motion } from "framer-motion";
import ReactFullpage from '@fullpage/react-fullpage';
import Project from './projects/Project';
import SlideTech from './slideshow/SlideTech';
import Footer from '../starter/footer/Footer';
import Contact from './contact/Contact';

//Ready
import ready from '../assets/svg-projects/ready.svg';
import readyTwo from '../assets/svg-projects/readyTwo.svg';

//FigurToys
import sephi from '../assets/svg-projects/sephi.svg';
import epaule from '../assets/svg-projects/epaule.svg';
import cloud from '../assets/svg-projects/cloud.svg';

//Portfolio 2020
import marvin from '../assets/svg-projects/marvin.svg';

//Acacia
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
                name_other_half:"Day",
                cls_name_half:"b-rainy",
                cls_name_half_md:"b-rainy-md",
                cls_mark_name: "mark-tech-rainy",
                tech: "React.js - Bootstrap -Javascript - ",
                tech_other_half: "Firebase",
                cls_card: "card-rainy",
                svg:ready,
                svg_2:readyTwo,
                alt_svg:"Anime kimetsu no yaiba(Demon Slayer) background black",
                alt_svg_2:"Anime Kimetsu no yaiba(Demon Slayer) background yellow",
                cls_svg: "svg-project-rainy",
                cls_svg_2: "svg-project-rainy-2",

                // Mission
                
                cls_head_img:"rainyLand",
                citation:"Tout est la maintenant ,à vous de voir",
                synopsis: "RainyDay est une plate-forme de suivi pour la télévision et les films. Il permet aux utilisateurs de suivre ce qu'ils regardent, RainyDay permet également aux utilisateurs de réagir  et de commenter des épisodes au sein de la communauté du site. Les utilisateurs ne peuvent pas regarder des émissions ou des films avec RainyDay.",
                cls_half_img:"rainyHalf",
                mission:"Création d’une page d’attente présentant succinctement le studio et son savoir-faire. Focus sur l’animation de certains éléments ainsi que les micro-interactions. Les technologies utilisées sont bara.js – gsap – blotter.js et curtainsJS",
                cls_img:"rainyCard",
                github:"https://github.com/matohoundev?tab=repositories"
            },
            {
                id: 2,
                cls_slide: "slide-figur",
                cls_slide_2: "slide-figur-2",
                cls_name: "figurToys",
                cls_h3:"h3-figur",
                name: "Figur",
                name_other_half: "Toys",
                cls_name_half:"b-figur",
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
                cls_svg_3: "svg-project-figur-3",
                
                // Mission

                cls_head_img:"figurLand",
                citation:"0",
                synopsis: "FigurToys est une Boutique en ligne de Figurines de collections et produits Geek, 100% authentique sous licence officiel, Dérivé du Cinéma, Manga, Musique, Horreur, Jeux ...",
                cls_half_img:"figurHalf",
                mission:0,
                cls_img:"figurCard",
                github:"https://github.com/matohoundev/Wordpress-FigurToys"
            },
            {
                id: 3,
                cls_slide: "slide-folio",
                cls_slide_2: "slide-folio-2",
                cls_name: "folio",
                cls_h3:"h3-folio",
                name: "Folio",
                name_other_half: "2020",
                cls_name_half:"b-folio",
                cls_name_half_md:"b-folio",
                cls_mark_name: "mark-tech-folio",
                tech: "Bootstrap - Javascript  - Jquery - ",
                tech_other_half: "Php",
                cls_card: "card-folio",
                svg:marvin,
                alt_svg:"Atohoun marvin auteur du site (moi en gros)",
                cls_svg: "svg-project-folio",

                // Mission

                cls_head_img:"folioLand",
                citation:"0",
                synopsis: "FigurToys est une Boutique en ligne de Figurines de collections et produits Geek, 100% authentique sous licence officiel, Dérivé du Cinéma, Manga, Musique, Horreur, Jeux ...",
                cls_half_img:"folioHalf",
                mission:"0",
                cls_img:"folioCard",
                github:"https://github.com/matohoundev/Portfolio-2020"
            },
            {
                id: 4,
                cls_slide: "slide-acacia",
                cls_slide_2: "slide-acacia-2",
                cls_name: "acacia",
                cls_h3:"h3-acacia",
                name: "Aca",
                name_other_half: "cia",
                cls_name_half:"b-acacia",
                cls_mark_name: "mark-tech-acacia",
                tech: "Mvc - Materialize - Javascript ",
                tech_other_half: "- Jquery - Php",
                cls_card: "card-acacia",
                svg:cuisto,
                alt_svg:"chef cuistot cartoon",
                cls_svg: "svg-project-acacia",
                

                // Mission

                cls_head_img:"acaciaLand",
                citation:"0",
                synopsis: "FigurToys est une Boutique en ligne de Figurines de collections et produits Geek, 100% authentique sous licence officiel, Dérivé du Cinéma, Manga, Musique, Horreur, Jeux ...",
                cls_half_img:"acaciaHalf",
                mission:0,
                cls_img:"acaciaCard",
                github:"https://github.com/matohoundev/Acacia"
            }
        ]
    }

    render() {

        const pageVariants = {
            initial: {
                x: "100vw"
              },
            in: {
                x: "100vw"
            },
            out: {
                x: "0vw"
            }
          };
          
          const pageTransition = {
            ease: "easeOut",
            duration: 0.5
          };
          
        return (
            <ReactFullpage

                licenseKey={'ne pas oublier de la prendre après'}

                scrollBar={true}

                // scrollingSpeed={200}

                render={({ state, fullpageApi }) => {

                    return (
                        
                        <Fragment>
                        
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                            className="transition">
                        </motion.div>

                            <header className="head-Main section"
                                data-aos="header-slide"
                                data-aos-duration="2500"
                            >
                                <h1 data-aos="fade-right">ATOHOUN MARVIN</h1>
                                <h2 data-aos="fade-right">Front-end Developper</h2>
                            </header>

                                <section className="about section" 
                                    data-aos="about-slide"
                                    data-aos-duration="2500"
                                >
                                    <p data-aos="fade">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services. Je réalise des sites internet avec le souci du détail et un rendu ﬁdèle au design.</p>
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
                                        cls_name_half_md={projet.cls_name_half_md}
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

                                        //mission

                                        cls_head_img={projet.cls_head_img}
                                        citation={projet.citation}
                                        synopsis={projet.synopsis}
                                        cls_half_img={projet.cls_half_img}
                                        mission={projet.mission}
                                        cls_img={projet.cls_img}
                                        github={projet.github}
                                    />
                                ))}
                            
                            <div className="section">
                                <Contact />
                                <SlideTech />
                                <Footer />
                            </div>
                            

                        </Fragment>
                    );
                }}   
            />
        );
    }
}

export default Main;
