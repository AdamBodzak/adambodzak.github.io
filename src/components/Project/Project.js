import React from 'react';
import githubImageWhite from '../../assets/img/GitHubIcon_white.svg';
import circlesTopImage from '../../assets/img/circles_top.svg';
import styles from './Project.module.scss';

const Project = ({ name, description, homepage, svn_url }) => {
    return(
        <article className={styles.oneProject}>
            <div className={styles.topBar}>
                <img className={styles.circlesTopImage} src={circlesTopImage} alt={'Circles'} />
                <img className={styles.githubIcon} src={githubImageWhite} alt={'GitHub'} />
                <h2 className={styles.projTitleHead}>{name}</h2>
            </div>
            <div className={styles.projInformation}>
                <h2 className={`${styles.projTitle} ${styles.leftInfo}`}>project:</h2><h2 className={`${styles.projTitle} ${styles.projTitle__bold}`}>{name}</h2>
                <span className={`${styles.projDescription} ${styles.leftInfo}`}>description:</span><span className={`${styles.projDescription} ${styles.justify}`}>{description}</span>
                <span className={`${styles.projDemo} ${styles.leftInfo}`}>demo:</span><a href={homepage} className={`${styles.projDemo} ${styles.blue}`}>see here</a>
                <span className={`${styles.projGithub} ${styles.leftInfo}`}>github:</span><a href={svn_url} className={`${styles.projGithub} ${styles.blue}`}>source code</a>
            </div>
        </article>
    )
};

export default Project;