import React, { Component } from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import MyFooter from "./components/MyFooter";
import "./styles/base.css";
import "./styles/App.css";

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
          <ExperienceSection experienceType="Education" />
          <ExperienceSection experienceType="Professional Experience" />
        </main>
        <MyFooter />
      </div>
    );
  }
}
