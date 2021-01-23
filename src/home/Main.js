import React, { Component, Fragment } from 'react';
import { motion } from "framer-motion";
import ReactFullpage from '@fullpage/react-fullpage';
import Project from './projects/Project';
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
                citation:"Tout est la maintenant, à vous de voir",
                synopsis: "RainyDay est une plate-forme de suivi pour la télévision et les films. Il permet aux utilisateurs de suivre ce qu'ils regardent, RainyDay permet également aux utilisateurs de réagir  et de commenter des épisodes au sein de la communauté du site. Les utilisateurs ne peuvent pas regarder des émissions ou des films avec RainyDay.",
                cls_half_img:"rainyHalf",
                mission:"RainyDay est un projet personnelle entièrement crée par moi. Le projet rainyDay est actuellement en cours de création, une version bêta sera bientôt disponible et sans suivra une application mobile, en attendant vous pouvez suivre mes différents projet perso sur mon Github.",
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
                citation:"Pourquoi toutes ces figurines ? Why not",
                synopsis: "FigurToys est une Boutique fictif en ligne de Figurines de collections et produits Geek, 100% authentique sous licence officiel, Dérivé du Cinéma, Manga, Musique, Horreur, Jeux ...",
                cls_half_img:"figurHalf",
                mission: "Création d'une boutique Wordpress avec le thème Astra et WooCommerce pour la gestion du panier. ",
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
                citation:"Pourquoi faire compliqué quand on peut faire simple",
                synopsis: "Folio2020 est tout simplement l'édition 2020 de mon portfolio.",
                cls_half_img:"folioHalf",
                mission:"L'édition 2020 de mon portfolio avait pour objectif d'offrir deux identités visuelle sur la même page via les différents interaction proposée, interaction qui au fur et à mesure modifiait l'apparence du site pour proposer une experience différente, le premier design était sobre et le second beaucoup plus colorée.",
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
                citation:"La bonne cuisine est honnête, sincère et simple.",
                synopsis: "Acacia est un restaurant gastronomique fictif, il est fictivement basée à Paris et ils s'y cuisinent tout aussi fictivement de délicieux plats.",
                cls_half_img:"acaciaHalf",
                mission:"Création d’une solution pour qu'un restaurants puisse fidéliser ces clients via un espace membre leur permettant de commenter les différents articles partager par  le restaurant, et de bénéficier de différents bon de réduction.",
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
                                    <p data-aos="fade"><span class="about-plus">"Votre projet est le mien"</span> c'est ainsi que j'envisage tout projet votre motivation est la mienne et c'est ce qui me permet d'atteindre un rendu fidèle au design. Développer de manière agile et polir chaque détails avec la soif d'innover ce sont mes valeurs.</p>
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
