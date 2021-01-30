import React, { Component, Fragment } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Footer from '../starter/footer/Footer';
import './mission.scss';

export class Mission extends Component { 
    render() {

        const props = this.props.location.state.mission

        const pageVariants = {
            initial: {
                x: "0vw"
              },
            in: {
                x: "100vw"
            },
            out: {
                x: "100vw"
            }
          };
          
          const pageTransition = {
            ease: "easeIn",
            duration: 0.5
          };

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
            <div className="mission" data-aos="mission-slide">
                <header className="head-mission">
                    <h3 className={props.cls_h3}
                        data-aos="fade"
                        data-aos-duration="1000"
                    >{props.name}<b className={props.cls_name_half}>{props.name_other_half}</b>
                    </h3>
                </header>

                <div className={`head-mission-img parallax ${props.cls_head_img}`} alt={props.banner}></div>

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
                        <strong>Quid ?</strong>
                        <p>{props.synopsis}</p>
                    </article>

                    <div className="half-mission-img"
                        data-aos="fade-up"
                        data-aos-duration="800" 
                    >
                        <div className={`cd-1 parallax ${props.cls_half_img}`} alt={props.img_project}></div>
                    </div> 

                    <div className="about-mission" 
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                    >
                        <strong>Mission</strong>
                        <p>{props.mission}</p>
                        <p>Technologies utilisées : {props.tech}</p>
                        <a href={props.github} target="_blank" rel="noreferrer"><button className="github">Github</button></a>
                    </div>

                    <div className="card-mission">
                        <div className="card-part-one" 
                            data-aos="fade-right" 
                            data-aos-duration="800"
                        >
                            <div className={`cd-img card-mission-img-type1 parallax ${props.cls_img}`} alt={props.img_project_pllx}></div>
                            <div className={`cd-img card-mission-img-type2 parallax ${props.cls_img}`} alt={props.img_project_pllx_2}></div>
                            
                        </div>
                        
                        <div className="card-part-two" 
                            data-aos="fade-left"
                            data-aos-duration="800"
                        >
                            <div className={`cd-img card-mission-img-type3 parallax ${props.cls_img}`} alt={props.img_project_pllx_3}></div>
                        </div>     
                    </div>
                </section>
                
                <button className="returnHome"><Link to="/">Retour</Link></button>
                <Footer />
            </div></Fragment>
        )
    }
}

export default Mission;
