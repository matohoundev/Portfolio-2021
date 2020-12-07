import React, { Component, Fragment } from 'react';
import Project from './projects/Project';
import './main.scss';

export class Main extends Component {
    render() {
        return (
            <Fragment>
                <header className="head-Main">
                    <h1>ATOHOUN MARVIN</h1>
                    <h2>Front-end Developper</h2>
                </header>
                
                <main>
                    <section className="about">
                        <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services. Je réalise des sites internet avec le souci du détail et un rendu ﬁdèle au design.</p>
                    </section>

                    <Project />
                </main>
                
            </Fragment>
        )
    }
}

export default Main;
