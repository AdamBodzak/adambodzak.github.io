import React from 'react';
import styles from './Projects.module.scss';
import Project from '../Project/Project';

class Projects extends React.Component {
    state = {
        projectsList: [],
    }

    componentDidMount() {
        fetch("https://api.github.com/users/AdamBodzak/repos")
        .then((res) => res.json())
        .then((res) => {
            const array = res.filter((e) => (e.description !== null) )
            this.setState({
                projectsList: array
            })
        })
        .catch((error) => console.log(error));
    }

    render() {
        console.log(this.state.projectsList)
        return(
            <section className={styles.section}>
                <h1 className={styles.headerView}>Moje ostatnie projekty</h1>
                <p className={styles.paragraf}>Swoją ścieżkę programisty rozpocząłem około roku 2000. Od tego czasu stworzyć kilka projektów. Od marca 2020r. posiadam konto na GitHub-ie i oto lista kilku projektów które chciałem zaprezentować.</p>
                <div className={styles.allProjects}>
                    {this.state.projectsList.map((e) => (
                        <Project
                            key={e.id}
                            name={e.name}
                            description={e.description}
                            homepage={e.homepage}
                            svn_url={e.svn_url}
                        />
                    ))}
                </div>
            </section>
        )
    }
};

export default Projects;