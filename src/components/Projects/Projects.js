import React from 'react';
import styles from './Projects.module.scss';
import githubImageWhite from '../../assets/img/GitHubIcon_white.svg';
import circlesTopImage from '../../assets/img/circles_top.svg';

const Projects = () => {
    return(
        <section className={styles.section}>
            <h1 className={styles.headerView}>Moje ostatnie projekty</h1>
            <p className={styles.paragraf}>Swoją ścieżkę programisty rozpocząłem około roku 2000. Od tego czasu stworzyć kilka projektów. Od marca 2020r. posiadam konto na GitHub-ie i oto lista kilku projektów które chciałem zaprezentować.</p>
            <div className={styles.allProjects}>
                <article className={styles.oneProject}>
                    <div className={styles.topBar}>
                        <img className={styles.circlesTopImage} src={circlesTopImage} alt={'Circles'} />
                    </div>
                    <img className={styles.githubIcon} src={githubImageWhite} alt={'GitHub'} />
                    <div className={styles.projInformation}>
                        <h2 className={`${styles.projTitle} ${styles.leftInfo}`}>project:</h2><h2 className={`${styles.projTitle} ${styles.projTitle__bold}`}>Aaaa</h2>
                        <span className={`${styles.projDescription} ${styles.leftInfo}`}>description:</span><span className={styles.projDescription}>Aaaa sgdregd fhndf hdfghdf j d jghf jgf jty j dfj tyj fj dtj tykj ty juity uj gf j ty k tk kj yk uu k</span>
                        <span className={`${styles.projDemo} ${styles.leftInfo}`}>demo:</span><span className={`${styles.projDemo} ${styles.blue}`}>Aaaa</span>
                        <span className={`${styles.projGithub} ${styles.leftInfo}`}>github:</span><span className={`${styles.projGithub} ${styles.blue}`}>Aaaa</span>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Projects;