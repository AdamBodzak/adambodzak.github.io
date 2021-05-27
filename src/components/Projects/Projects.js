import React from 'react';
import styles from './Projects.module.scss';
import Project from '../Project/Project';
import projectImage from '../../assets/img/projects.svg';

class Projects extends React.Component {
    state = {
        projectsList: [],
        pinsRepo: [
            'adambodzak.github.io',
            'AdamRomanowski_kursReactOdPodstaw',
            'CourseReact_QuickStart_MichalTaszycki',
            'secondPageDROGOWIEC',
            'Kurs_ReaktFundamenty_MichalTaszycki',
            'Szkolenie_GraphQL',
        ]
    }

    componentDidMount() {
        fetch("https://api.github.com/users/AdamBodzak/repos")
        .then((res) => res.json())
        .then((res) => {
            const resultMatching = res.filter((e) => (this.state.pinsRepo.includes(e.name)) )
            let resultInOrder = [];
            for (let i = 0; i < this.state.pinsRepo.length; i++) {
                const oneObject = resultMatching.filter(e => e.name === this.state.pinsRepo[i])
                resultInOrder.push(...oneObject)
            }
            this.setState({
                projectsList: resultInOrder
            })
        })
        .catch((error) => console.log(error));
    }

    render() {
        return(
            <section className={styles.section}>
                <h1 className={styles.headerView}>Moje ostatnie projekty</h1>
                <p className={styles.paragraf}>Swoją ścieżkę programisty rozpocząłem około roku 2000. Od tego czasu stworzyć kilka projektów. Od marca 2020r. posiadam konto na GitHub-ie i oto kilku projektów które chciałem zaprezentować.</p>
                <img className={styles.projectImage} src={projectImage} alt={'project'}/>
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