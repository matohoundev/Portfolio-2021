import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import ReactFullpage from "@fullpage/react-fullpage";
import Project from "../../components/projects/Project";
import Footer from "../../starter/footer/Footer";
import Contact from "../../components/contact/Contact";
import JsServices from "../../services/JsServices";

const Main = () => {
  const [projects] = useState(new JsServices().getAllProjects());

  const pageVariants = {
    initial: {
      x: "100vw",
    },
    in: {
      x: "100vw",
    },
    out: {
      x: "0vw",
    },
  };

  const pageTransition = {
    ease: "easeOut",
    duration: 0.5,
  };

  return (
    <ReactFullpage
      licenseKey={"iH#FNbQ%c2"}
      scrollBar={true}
      render={() => {
        return (
          <Fragment>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="transition"
            ></motion.div>

            <header
              className="head-Main section"
              data-aos="header-slide"
              data-aos-duration="2500"
            >
              <h1 data-aos="fade-right">ATOHOUN MARVIN</h1>
              <h2 data-aos="fade-right">Front-end Developper</h2>
            </header>

            <section
              className="about section"
              data-aos="about-slide"
              data-aos-duration="2500"
            >
              <p data-aos="fade">
                <span className="about-plus">"Votre projet est le mien"</span>{" "}
                c'est ainsi que j'envisage une mission votre motivation est la
                mienne et c'est ce qui me permet d'atteindre un rendu fidèle au
                design. Développer de manière agile et polir chaque détail avec
                la soif d'innover, ce sont mes valeurs.
              </p>
            </section>

            {projects.map((projet, id) => (
              <Project
                key={id}
                project_id={id}
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
                alt_svg={projet.alt_svg}
                alt_svg_2={projet.alt_svg_2}
                alt_svg_3={projet.alt_svg_3}
                cls_svg={projet.cls_svg}
                cls_svg_2={projet.cls_svg_2}
                //mission

                cls_head_img={projet.cls_head_img}
                citation={projet.citation}
                synopsis={projet.synopsis}
                cls_half_img={projet.cls_half_img}
                mission={projet.mission}
                cls_img={projet.cls_img}
                alt_card={projet.alt_card}
                github={projet.github}
                alt_banner={projet.alt_banner}
                img_project={projet.img_project}
                img_project_pllx={projet.img_project_pllx}
                img_project_pllx_2={projet.img_project_pllx_2}
                img_project_pllx_3={projet.img_project_pllx_3}
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
};

export default Main;
