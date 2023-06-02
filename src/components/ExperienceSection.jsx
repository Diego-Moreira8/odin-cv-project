import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import ExperienceItem from "./ExperienceItem";
import "../styles/ExperienceSection.css";

export default class ExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceList: [
        {
          id: uuid(),
          location: "UFCAT",
          area: "Computer Science",
          yearFrom: 2016,
          yearTo: 2020,
          description: "Description text..........",
        },
        {
          id: uuid(),
          location: "Una",
          area: "Psychology",
          yearFrom: 2020,
          yearTo: 2024,
          description: "Description text..........",
        },
      ],
    };

    this.addExperience = this.addExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  addExperience(newExperience) {
    // TODO
    console.log(newExperience);
  }

  updateExperience(newExperience) {
    const experienceListCopy = [...this.state.experienceList];
    const indexToUpdate = experienceListCopy.findIndex(
      (experience) => experience.id === newExperience.id
    );

    experienceListCopy[indexToUpdate] = { ...newExperience };
    this.setState((prevState) => ({
      ...prevState,
      experienceList: [...experienceListCopy],
    }));
  }

  deleteExperience(id) {
    this.setState((prevState) => ({
      ...prevState,
      experienceList: prevState.experienceList.filter(
        (experience) => experience.id !== id
      ),
    }));
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
            {this.state.experienceList.map((experience) => (
              <li key={experience.id}>
                <ExperienceItem
                  experienceInfo={experience}
                  updateExperience={this.updateExperience}
                  deleteExperience={this.deleteExperience}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
