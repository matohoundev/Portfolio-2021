import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../starter/footer/Footer";
import JsServices from "../../services/JsServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faJs,
  faSass,
  faBootstrap,
  faWordpress,
  faPhp,
  faDrupal,
  faAndroid,
  faApple,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Mission = () => {
  const { id } = useParams();
  const [project] = useState(new JsServices().getProjectByName(id));
  const iconForTech = (tech) => {
    switch (tech) {
      case "React.js":
      case "React native":
        return faReact;
      case "Vue.js":
      case "Vite.js":
      case "Pinia":
        return faVuejs;
      case "Javascript":
        return faJs;
      case "Sass":
      case "Scss":
        return faSass;
      case "Bootstrap":
        return faBootstrap;
      case "Wordpress":
        return faWordpress;
      case "Php":
        return faPhp;
      case "Drupal":
        return faDrupal;
      case "Android Studio":
        return faAndroid;
      case "Xcode":
        return faApple;
      case "Analytics":
        return faGoogle;
      default:
        return "fas fa-question";
    }
  };

  const pageVariants = {
    initial: {
      x: "0vw",
    },
    in: {
      x: "100vw",
    },
    out: {
      x: "100vw",
    },
  };

  const pageTransition = {
    ease: "easeIn",
    duration: 0.5,
  };

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
      <div className="mission" data-aos="mission-slide">
        <header className="head-mission">
          <h3
            className={project.cls_h3}
            data-aos="fade"
            data-aos-duration="1000"
          >
            {project.name}
            <b className={project.cls_name_half}>{project.name_other_half}</b>
          </h3>
        </header>

        {!project.new && (
          <div
            className={`head-mission-img parallax ${project.cls_head_img}`}
            alt={project.banner}
          ></div>
        )}
        {project.new && (
          <div className="head-mission-description">
            <p>{project.synopsis}</p>
          </div>
        )}

        <section className="main-mission">
          {!project.new && (
            <q
              className="citation-mission"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {project.citation}
            </q>
          )}

          {project.new && (
            <div className="info">
              <div
                className="white"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="description">
                  <h2>Descriptif mission</h2>
                  <p>{project.mission}</p>
                </div>
                <div className="aside">
                  <div className="annee">
                    <h2>Année</h2>
                    <p>{project.year}</p>
                  </div>
                  {project.link && (
                    <div className="lien">
                      <h2>Lien</h2>
                      <p>faire un a href ici</p>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="black"
                data-aos="fade-down-left"
                data-aos-duration="1000"
              >
                <h2>Tech</h2>
                <ul>
                  {project.tech_mission.map((tech, id) => (
                    <li
                      key={id}
                      className={
                        tech === "Android Studio" || "React native"
                          ? "longText"
                          : ""
                      }
                    >
                      <FontAwesomeIcon icon={iconForTech(tech)} />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {project.new && (
            <div className="gallery">
              <h2>Gallerie</h2>
              <div className="gallery-img">
                {project.img_project_route.map((img, id) => (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img key={id} src={img} alt={`image du projet n°${id + 1}`} />
                ))}
              </div>
            </div>
          )}

          {!project.new && (
            <Fragment>
              <article
                className="synopsis"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <strong>Quid ?</strong>
                <p>{project.synopsis}</p>
              </article>

              <div
                className="half-mission-img"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div
                  className={`cd-1 parallax ${project.cls_half_img}`}
                  alt={project.img_project}
                ></div>
              </div>

              <div
                className="about-mission"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <strong>Mission</strong>
                <p>{project.mission}</p>
                <em>Technologies utilisées : {project.tech}</em>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="github">Github</button>
                </a>
              </div>

              <div className="card-mission">
                <div
                  className="card-part-one"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div
                    className={`cd-img card-mission-img-type1 parallax ${project.cls_img}`}
                    alt={project.img_project_pllx}
                  ></div>
                  <div
                    className={`cd-img card-mission-img-type2 parallax ${project.cls_img}`}
                    alt={project.img_project_pllx_2}
                  ></div>
                </div>

                <div
                  className="card-part-two"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div
                    className={`cd-img card-mission-img-type3 parallax ${project.cls_img}`}
                    alt={project.img_project_pllx_3}
                  ></div>
                </div>
              </div>
            </Fragment>
          )}
        </section>

        <button className="returnHome">
          <Link to="/">Retour</Link>
        </button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Mission;
