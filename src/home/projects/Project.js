import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';

export class Project extends Component {

    state = {
            missions: [
                {
                    id: this.props.project_id,
                    name: this.props.name,
                    name_other_half: this.props.name_other_half,
                    cls_h3: this.props.cls_h3,
                    cls_name_half: this.props.cls_name_half,
                    tech: this.props.tech + this.props.tech_other_half,
                    cls_head_img: this.props.cls_head_img,
                    citation:this.props.citation,
                    synopsis: this.props.synopsis,
                    cls_half_img: this.props.cls_half_img,
                    mission: this.props.mission,
                    cls_img: this.props.cls_img,
                }
            ]
        }

    render() {

        let min_width = 844;

        return (
            <div className="section">

                <div className={`slide-project ${this.props.cls_slide}`} 
                    data-aos="project-slide-f"
                    ></div>

                <section className={`projet ${this.props.cls_name} ${this.props.cls_slide_2}`}
                    data-aos="project-slide-b"
                >
                    <div className="col-preview">
                        <h3 className={this.props.cls_h3} data-aos="fade-left">
                            {this.props.name}
                                {min_width > document.body.clientWidth ? 
                                    <b className={this.props.cls_name_half}>{this.props.name_other_half}</b>
                                     : 
                                    <b className={this.props.cls_name_half_md}>{this.props.name_other_half}</b>
                                }
                        </h3>
                        <em>
                            {this.props.tech}
                            <mark className={this.props.cls_mark_name}>{this.props.tech_other_half}</mark>
                        </em>

                        {this.state.missions.map(mission => (
                            <Link
                            key={this.props.project_id}
                            to={{
                                pathname: "/mission",
                                state: {
                                    mission
                                }
                            }}>
                                <div className={`card-project ${this.props.cls_card}`}></div>
                            </Link>
                         ))}

                    </div>

                    <div id="#" className="col-mb">
                        <img src={this.props.svg} alt={this.props.alt_svg} className={this.props.cls_svg} data-aos="img-slide-left"/>
                        {this.props.project_id === 1 || 2 ? 
                            <img src={this.props.svg_2} alt={this.props.alt_svg_2} className={this.props.cls_svg_2} data-aos="img-slide-right"/>
                            :
                            null
                        }
                        {this.props.project_id === 2 ? 
                            <img src={this.props.svg_3} alt={this.props.alt_svg_3} className={this.props.cls_svg_3} data-aos="img-slide-up"/>
                            :
                            null
                        }
                    </div>
                    
                </section>                
            </div>
        )
    }
}

export default Project
