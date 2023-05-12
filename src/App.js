import React, {Component} from "react";
import "./styles.css"
import Header from "./components/header";
import Profile from "./components/profile";
import Education from "./components/education";
import Experience from "./components/experience";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
