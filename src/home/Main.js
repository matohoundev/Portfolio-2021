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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet voluptatibus autem. Voluptatibus porro provident unde vel illo repellat fugit aspernatur? Fugiat impedit officia commodi dignissimos quis repellendus atque quaerat.
                        Exercitationem dolore, enim repellat explicabo voluptate commodi sequi saepe harum adipisci eum, vero dignissimos sunt! Neque quisquam atque harum possimus consequatur dolore, iure eos quia nostrum illo quis esse enim!
                        Voluptates maiores tempore, at non aliquam architecto doloribus tenetur natus, quibusdam eius ducimus amet nisi, ab illo eligendi unde quo inventore cum magnam aperiam! Culpa quod facilis dolorem saepe velit!</p>
                    </section>

                    <Project />
                </main>
                
            </Fragment>
        )
    }
}

export default Main;
