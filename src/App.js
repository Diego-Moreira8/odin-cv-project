import React, {Component} from "react";
import "./reset.css"
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
        <div id="content">
          <Profile />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
