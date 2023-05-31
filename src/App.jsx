import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import MyFooter from "./components/MyFooter";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="body">
        <Header />
        <main>
          <ProfileSection />
          <EducationSection />
        </main>
        <MyFooter />
      </div>
    );
  }
}
