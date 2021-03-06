import React from "react";
import { withRouter } from "react-router";
import Navigation from "../Navigation/Navigation";
import avatar from "../../assets/img/avatar_300.gif";
import styles from "./Header.module.scss";

class Header extends React.Component {
  state = {
    jokes: [],
    randomNumber: 0,
    showMobileMenu: false,
    isNext: false,
  };

  randomNextJoke() {
    this.setState({
      isNext: true,
    });
  }

  componentDidMount() {
    this.getJokes();
  }

  randomNumber(jokes) {
    this.setState({
      randomNumber: Math.floor(Math.random() * jokes.length),
    });
  }

  getJokes() {
    // connecting to API to retrieve jokes
    fetch("https://api.jsonbin.io/b/5ff70d0b09f7c73f1b6ec2b4")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          jokes: res.jokes,
        });
        this.randomNumber(res.jokes);
      })
      .catch((error) => console.log(error));
  }

  handleShowMobileMenu = () => {
    this.setState((prevState) => {
      return { showMobileMenu: prevState.showMobileMenu ? false : true };
    });
  };
  render() {
    const { showMobileMenu, jokes, randomNumber, isNext } = this.state;
    const question = jokes[randomNumber]?.question;
    const answer = jokes[randomNumber]?.answer;
    const { pathname } = this.props.location;
    let speech = "";

    switch (pathname) {
      case "/":
        speech =
          "Miło że jesteś na mojej stronie. Opowiem ci trochę o moich umiejętnościach...";
        break;
      case "/projects":
        speech = "Chciałbym przedstawić ci parę moich projektów...";
        break;
      case "/contact":
        speech =
          "Możesz znaleźć mnie na GitHub, LinkEdin lub po prostu napisać do mnie...";
        break;
      case "/about_me":
        speech = "Zanim zaczniesz czytać o mnie zacznijmy od żartu...";
        break;
      default:
        break;
    }

    return (
      <header className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={"Avatar"} />
        <div className={styles.wrapper}>
          <div className={styles.welcome}>
            {pathname === "/about_me" ? (
              <div
                onClick={() => {
                  this.randomNumber(jokes);
                  this.randomNextJoke();
                }}
                className={`${styles.speech} ${styles.cursor}`}
              >
                <p className={styles.greeting}>
                  {isNext && pathname === "/about_me"
                    ? "Widzę że spodobały ci się żarty. Jest ich znacznie więcej"
                    : speech}
                </p>
                <p className={styles.joke}>{question}</p>
                <p className={styles.joke}>{answer}</p>
                <p className={styles.note}>
                  wylosowałeś {randomNumber + 1} żart, kliknij i wylosujemy
                  kolejny, jest ich w sumie {jokes.length}
                </p>
              </div>
            ) : (
              <div className={styles.speech}>
                <p className={styles.greeting}>{speech}</p>
              </div>
            )}
          </div>
          <Navigation
            fnShowMenu={this.handleShowMobileMenu}
            showMobileMenu={showMobileMenu}
          />
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
