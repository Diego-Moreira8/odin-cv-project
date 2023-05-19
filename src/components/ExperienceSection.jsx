import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import "../styles/ExperienceSection.css";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="experience-section">
        <h2 className="experience-section-header">
          {this.props.experienceType}
        </h2>
        <div className="experience-section-box">
          <button type="button" className="add-experience-button">
            Add
          </button>
          <ul className="history-list">
            <ExperienceItem />
          </ul>
        </div>
      </section>
    );
  }
}
