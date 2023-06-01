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
    return this.state.isEdting ? (
      <ExperienceItemForm
        expInfo={this.props.expInfo}
        updateItem={this.props.updateItem}
        toggleEditing={this.toggleEditing}
      />
    ) : (
      <ExperienceItemDisplay
        expInfo={this.props}
        toggleEditing={this.toggleEditing}
      />
    );
  }
}

export default ExperienceItem;
