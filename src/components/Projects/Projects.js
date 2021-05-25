import React from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
    return(
        <>
            <h1>Moje ostatnie projekty</h1>
            <h2>Swoją ścieżkę programisty rozpocząłem około roku 2000. Od tego czasu stworzyć kilka projektów. Oto lista kilku z nich, które chciałem zaprezentować.</h2>
            <div className={styles.projects}>

            </div>
        </>
    )
};

export default Projects;