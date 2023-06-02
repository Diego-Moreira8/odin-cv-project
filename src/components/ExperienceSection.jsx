import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import ExperienceItem from "./ExperienceItem";
import ExperienceItemForm from "./ExperienceItemForm";
import "../styles/ExperienceSection.css";

export default class ExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddingNewExp: false,
      experienceList: [
        {
          id: uuid(),
          location: "A university",
          area: "A course",
          yearFrom: 2016,
          yearTo: 2020,
          description: "A brief text that describes your experience.",
        },
      ],
    };

    this.addExperience = this.addExperience.bind(this);
    this.toggleIsAddingNewExp = this.toggleIsAddingNewExp.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  addExperience(newExperience) {
    this.setState((prevState) => ({
      ...prevState,
      experienceList: [...prevState.experienceList, newExperience],
    }));
  }

  toggleIsAddingNewExp() {
    this.setState((prevState) => ({
      ...prevState,
      isAddingNewExp: !prevState.isAddingNewExp,
    }));
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
          {this.state.isAddingNewExp ? (
            <>
              <h3>New item:</h3>
              <ExperienceItemForm
                addExperience={this.addExperience}
                updateExperience={this.updateExperience}
                cancelBtnAction={this.toggleIsAddingNewExp}
              />
            </>
          ) : (
            <button
              type="button"
              className="add-experience-button"
              onClick={this.toggleIsAddingNewExp}
            >
              Add
            </button>
          )}

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
