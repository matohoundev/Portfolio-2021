import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';

const Project = props => {

        const [missions] = useState ([
            {
                id: props.project_id,
                name: props.name,
                name_other_half: props.name_other_half,
                cls_h3: props.cls_h3,
                cls_name_half: props.cls_name_half,
                tech: props.tech + props.tech_other_half,
                cls_head_img: props.cls_head_img,
                citation: props.citation,
                synopsis: props.synopsis,
                cls_half_img: props.cls_half_img,
                mission: props.mission,
                cls_img: props.cls_img,
                alt_banner: props.alt_banner,
                img_project: props.img_project,
                img_project_pllx: props.img_project_pllx,
                img_project_pllx_1: props.img_project_pllx_1,
                img_project_pllx_2: props.img_project_pllx_2,  
                github: props.github
            }
        ])

    let min_width = 844;

    return (
        <div id="project" className="section">

            <div className={`slide-base ${props.cls_slide}`}
                data-aos="project-slide-f" 
                data-aos-duration="2700"
            ></div>

            <section className={`projet ${props.cls_name} ${props.cls_slide_2}`}
                data-aos="project-slide-b"
            >
                <div className="col-preview">
                    <h3 className={props.cls_h3} data-aos="fade-left">
                        {props.name}
                        {min_width > document.body.clientWidth ?
                            <b className={props.cls_name_half}>{props.name_other_half}</b>
                            :
                            <b className={props.cls_name_half_md}>{props.name_other_half}</b>
                        }
                    </h3>
                    <em>
                        {props.tech}
                        <mark className={props.cls_mark_name}>{props.tech_other_half}</mark>
                    </em>

                    {missions.map(mission => (
                        <Link
                            key={props.project_id}
                            to={{
                                pathname: `/mission/${props.name.toLowerCase() + props.name_other_half.toLowerCase()}`,
                                state: {
                                    mission
                                }
                            }}>
                            <div className={`card-project ${props.cls_card}`} alt={props.alt_card}></div>
                        </Link>
                        ))}

                </div>

                <div id="#" className="col-mb">
                    <img src={props.svg} alt={props.alt_svg} className={props.cls_svg} data-aos="img-slide-left" />
                    {props.svg_2 ?
                        <img src={props.svg_2} alt={props.alt_svg_2} className={props.cls_svg_2} data-aos="img-slide-right" />
                        :
                        null
                    }
                </div>

            </section>
        </div>
    )
}

export default Project
