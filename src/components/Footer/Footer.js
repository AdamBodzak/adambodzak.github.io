import React from "react";
import styles from "./Footer.module.scss";
import logoImageAll from "../../assets/img/logoAll.svg";
import emailImage from "../../assets/img/email.svg";
import GitHubIconWhiteImage from "../../assets/img/GitHubIcon_white.svg";
import linkedinImage from "../../assets/img/Linkedin.svg";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logo}>
      <img className={styles.imageLogo} src={logoImageAll} alt="smol logo" />
    </div>

    <div className={styles.contact}>
      <a
        className={styles.wrapperLink}
        rel="noreferrer"
        target="_blank"
        href={"mailto: bodzak.adam@gmail.com"}
      >
        <img
          className={`${styles.emailImage} ${styles.imageIcon}`}
          src={emailImage}
          alt="e-mail"
        />
        <p className={styles.paragraph}>e-mail: bodzak.adam@gmail.com</p>
      </a>
      <a
        className={styles.wrapperLink}
        rel="noreferrer"
        target="_blank"
        href={"https://github.com/AdamBodzak"}
      >
        <img
          className={`${styles.githubImage} ${styles.imageIcon}`}
          src={GitHubIconWhiteImage}
          alt="github"
        />
        <p className={styles.paragraph}>GitHub: github.com/AdamBodzak</p>
      </a>

      <a
        className={styles.wrapperLink}
        rel="noreferrer"
        target="_blank"
        href={"https://www.linkedin.com/in/adam-bodzak-b834b5190"}
      >
        <img
          className={`${styles.githubImage} ${styles.emailImage}`}
          src={linkedinImage}
          alt="linkedin"
        />
        <p className={styles.paragraph}>Linkedin: linkedin.com</p>
      </a>
    </div>
  </footer>
);

export default Footer;
