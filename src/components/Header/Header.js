import React from "react";
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

    return (
      <header className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={"Avatar"} />
        <div className={styles.wrapper}>
          <div className={styles.welcome}>
            <div
              onClick={() => {
                this.randomNumber(jokes);
                this.randomNextJoke();
              }}
              className={styles.speech}
            >
              <p className={styles.greeting}>
                {isNext
                  ? "Widzę że spodobały ci się żarty. Jest ich znacznie więcej"
                  : "Miło że jesteś na mojej stronie zacznijmy..."}
              </p>
              <p className={styles.joke}>{question}</p>
              <p className={styles.joke}>{answer}</p>
              <p className={styles.note}>
                wylosowałeś {randomNumber + 1} żart, kliknij i wylosujemy
                kolejny, jest ich w sumie {jokes.length}
              </p>
            </div>
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

export default Header;
