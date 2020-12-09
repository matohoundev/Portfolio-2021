import React, { Component, Fragment } from 'react';
import ready from '../../assets/svg-projects/ready.svg';
import readyTwo from '../../assets/svg-projects/readyTwo.svg';
import './projects.scss';

export class Project extends Component {
    render() {
        return (
            <Fragment>
                <div className="slide-project-1 slide-r"></div>
                <div className="slide-project-2 slide-2-r"></div>
                <section className="projet rainyDay">
                    <div className="col-preview">
                        <h3 className="h3-rainy">Rainy<b className="b-rainy">Day</b></h3>
                        <em>React.js - Bootstrap - Javascript -<mark className="mark-techno"> Firebase</mark></em>
                        <div className="card-project"></div>
                    </div>
                    <div id="#" className="col-mb">
                        <img src={ready} alt="" className="svg-project"/>
                        <img src={readyTwo} alt="" className="svg-project-2"/>
                    </div>
                </section>                
            </Fragment>
        )
    }
}

export default Project
