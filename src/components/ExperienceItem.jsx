import React, { Component } from "react";
import ExperienceItemDisplay from "./ExperienceItemDisplay";
import ExperienceItemForm from "./ExperienceItemForm";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdting: true,
    };

    this.startEditing = this.startEditing.bind(this);
  }

  startEditing() {
    this.setState((prevState) => ({ ...prevState, isEdting: true }));
  }

  render() {
    return this.state.isEdting ? (
      <ExperienceItemForm
        expInfo={this.props.expInfo}
        updateItem={this.props.updateItem}
      />
    ) : (
      <ExperienceItemDisplay
        expInfo={this.props}
        startEditing={this.startEditing}
      />
    );
  }
}

export default ExperienceItem;
