import React, { Component, Fragment } from 'react';
import ready from '../../assets/svg-projects/ready.svg';
import './projects.scss';

export class Project extends Component {
    render() {
        return (
            <Fragment>
                <div className="slide-project-1"></div>
                <div className="slide-project-2"></div>
                <section className="projet rainyDay">
                    <div className="col-preview">
                        <h3>RainyDay</h3>
                        <em>React.js - Bootstrap - Javascript - Firebase</em>
                        <div className="card-project"></div>
                    </div>
                    <div id="#" className="col-svg">
                        <img src={ready} alt="" className="svg-project"/>
                    </div>
                </section>                
            </Fragment>
        )
    }
}

export default Project
