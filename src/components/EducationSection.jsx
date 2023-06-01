import React, { Component } from "react";
import ExperienceSection from "./ExperienceSection";
import { v4 as uuid } from "uuid";

class EducationSection extends Component {
  constructor() {
    super();
    this.state = {
      educationList: [
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

    this.deleteExpItem = this.deleteExpItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(newItem) {
    const educationListCopy = [...this.state.educationList];
    const indexToUpdate = educationListCopy.findIndex(
      (item) => item.id === newItem.id
    );
    educationListCopy[indexToUpdate] = { ...newItem };
    this.setState((prevState) => ({
      ...prevState,
      educationList: [...educationListCopy],
    }));
  }

  deleteExpItem(id) {
    this.setState((prevState) => ({
      ...prevState,
      educationList: prevState.educationList.filter((item) => item.id !== id),
    }));
  }

  render() {
    return (
      <ExperienceSection
        expType="Education"
        expList={this.state.educationList}
        updateItem={this.updateItem}
        deleteExpItem={this.deleteExpItem}
      />
    );
  }
}

export default EducationSection;
