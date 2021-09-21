import React from "react";
import styles from "./Contact.module.scss";
import ContactMail from "../ContactMail/ContactMail";
import GitHubIcon from "../../assets/img/GitHubIcon.svg";
import fb from "../../assets/img/FB.svg";
import mailIcon from "../../assets/img/Mail.svg";
import LinkedinBlue from "../../assets/img/LinkedinBlue.svg";

const Contact = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.headerView}>Kontakt ze mną</h1>
      <p className={styles.paragraf}>
        Jestem otwarty na nowe możliwości. Jeżeli masz jakieś dla mnie,
        porozmawiajmy!
      </p>
      <img className={styles.mailImage} src={mailIcon} alt={"mail"} />
      <div className={styles.contact}>
        <div className={styles.socialMedia}>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://github.com/AdamBodzak"}
          >
            <img className={styles.image} src={GitHubIcon} alt={"GitHub"} />
          </a>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://www.facebook.com/adam.bodzak.16/"}
          >
            <img className={styles.image} src={fb} alt={"Facebook"} />
          </a>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://www.linkedin.com/in/adam-bodzak-b834b5190"}
          >
            <img className={styles.image} src={LinkedinBlue} alt={"linkedin"} />
          </a>
        </div>
        <ContactMail />
      </div>
    </section>
  );
};

export default Contact;
