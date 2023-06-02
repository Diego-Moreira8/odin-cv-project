import React, { Component } from "react";
import ExperienceItemDisplay from "./ExperienceItemDisplay";
import ExperienceItemForm from "./ExperienceItemForm";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdting: false,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing() {
    this.setState((prevState) => ({
      ...prevState,
      isEdting: !prevState.isEdting,
    }));
  }

  render() {
    const { experienceInfo, updateExperience, deleteExperience } = this.props;
    return this.state.isEdting ? (
      <ExperienceItemForm
        experienceInfo={experienceInfo}
        updateExperience={updateExperience}
        cancelBtnAction={this.toggleEditing}
      />
    ) : (
      <ExperienceItemDisplay
        experienceInfo={experienceInfo}
        deleteExperience={deleteExperience}
        toggleEditing={this.toggleEditing}
      />
    );
  }
}

export default ExperienceItem;
