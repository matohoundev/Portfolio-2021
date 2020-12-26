import React, { Component, Fragment } from 'react';
import './projects.scss';

export class Project extends Component {
    render() {

        let min_view = 844;
        
        return (
            <Fragment>
                <div className={`slide-project ${this.props.cls_slide}`}></div>
                <section className={`projet ${this.props.cls_name} ${this.props.cls_slide_2}`}>
                    <div className="col-preview">
                        <h3 className={this.props.cls_h3}>
                            {this.props.name}
                                {min_view > document.body.clientWidth ? 
                                    <b className={this.props.cls_name_half}>{this.props.name_other_half}</b>
                                     : 
                                    <b className={this.props.cls_name_half_md}>{this.props.name_other_half}</b>
                                }
                        </h3>
                        <em>
                            {this.props.tech}
                            <mark className={this.props.cls_mark_name}>{this.props.tech_other_half}</mark>
                        </em>
                        <div className={`card-project ${this.props.cls_card}`}></div>
                    </div>

                    <div id="#" className="col-mb">
                        <img src={this.props.svg} alt={this.props.alt_svg} className={this.props.cls_svg}/>
                        {this.props.project_id === 1 || 2 ? 
                            <img src={this.props.svg_2} alt={this.props.alt_svg_2} className={this.props.cls_svg_2}/>
                            :
                            null
                        }
                        {this.props.project_id === 2 ? 
                            <img src={this.props.svg_3} alt={this.props.alt_svg_3} className={this.props.cls_svg_3}/>
                            :
                            null
                        }
                    </div>
                    
                </section>                
            </Fragment>
        )
    }
}

export default Project
