import React, { Component, Fragment } from 'react';
import './projects.scss';

export class Project extends Component {
    render() {
        return (
            <Fragment>
                <section className="projet rainyDay">
                    <div className="col-preview">
                        <h3>RainyDay</h3>
                        <em>React.js - Bootstrap - Javascript - Firebase</em>
                        <div className="card-project"></div>
                    </div>
                    <div id="#" className="col-svg">
                        <p>ici svg</p>
                    </div>
                </section>                
            </Fragment>
        )
    }
}

export default Project
