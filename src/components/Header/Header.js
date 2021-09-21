import React from "react";
import Navigation from "../Navigation/Navigation";
import avatar from "../../assets/img/avatar_300.gif";
import styles from "./Header.module.scss";

class Header extends React.Component {
  state = {
    jokes: [],
    randomNumber: 0,
    showMobileMenu: false,
  };

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
    const { showMobileMenu, jokes, randomNumber } = this.state;
    const question = jokes[randomNumber]?.question;
    const answer = jokes[randomNumber]?.answer;

    return (
      <header className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={"Avatar"} />
        <div className={styles.wrapper}>
          <div className={styles.welcome}>
            <div className={styles.speech}>
              <p className={styles.greeting}>
                Miło że jesteś na mojej stronie zacznijmy od suchara Romana
              </p>
              <p className={styles.joke}>{question}</p>
              <p className={styles.joke}>{answer}</p>
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
