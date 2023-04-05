import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../starter/footer/Footer";
import JsServices from "../../services/JsServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faVuejs,
  faJs,
  faSass,
  faBootstrap,
  faWordpress,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const Mission = () => {
  const { id } = useParams();
  const [project] = useState(new JsServices().getProjectByName(id));
  const test = [
    "react.js",
    "vue.js",
    "javascript",
    "sass",
    "bootstrap",
    "wordpress",
    "php",
  ];
  const iconForTech = (tech) => {
    switch (tech) {
      case "react.js":
        return faReact;
      case "vue.js":
        return faVuejs;
      case "javascript":
        return faJs;
      case "sass":
        return faSass;
      case "bootstrap":
        return faBootstrap;
      case "wordpress":
        return faWordpress;
      case "php":
        return faPhp;
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
            <p>
              RainyDay est une plate-forme de suivi pour la télévision et les
              films. Il permet aux utilisateurs de suivre ce qu'ils regardent,
              RainyDay permet également aux utilisateurs de réagir et de
              commenter des épisodes au sein de la communauté du site. Les
              utilisateurs ne peuvent pas regarder des émissions ou des films
              avec RainyDay.
            </p>
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
              <div className="white">
                <div className="description">
                  <h2>Description</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia facere quisquam, praesentium eligendi repellat
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia facere quisquam, praesentium eligendi repellat
                  </p>
                </div>
                <div className="aside">
                  <div className="annee">
                    <h2>Année</h2>
                    <p>2020</p>
                  </div>
                  <div className="lien">
                    <h2>Lien</h2>
                    <p>faire un a href ici</p>
                  </div>
                </div>
              </div>
              <div className="black">
                <h2>Tech</h2>
                <ul>
                  {test.map((tech, id) => (
                    <li key={id}>
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
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
                  alt=""
                />
                <img
                  src="https://www.fredzone.org/wp-content/uploads/2022/12/IMG-20221206-WA0004-1.jpg"
                  alt=""
                />
                <img
                  src="https://www.fredzone.org/wp-content/uploads/2022/12/IMG-20221206-WA0004-1.jpg"
                  alt=""
                />
                <img
                  src="https://www.fredzone.org/wp-content/uploads/2022/12/IMG-20221206-WA0004-1.jpg"
                  alt=""
                />
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
                  alt=""
                />
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
