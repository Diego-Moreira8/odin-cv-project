import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "../styles/ExperienceItemForm.css";

class ExperienceItemForm extends Component {
  constructor(props) {
    super(props);

    this.isAddingNewExperience = !this.props.hasOwnProperty("experienceInfo");
    this.emptyExperienceInfo = {
      id: uuid(),
      location: "",
      area: "",
      yearFrom: new Date().getFullYear(),
      yearTo: new Date().getFullYear(),
      description: "",
    };

    /* If props has no objects,
    this form will be used to add a new item. */
    this.state = {
      expInfoCopy: this.isAddingNewExperience
        ? { ...this.emptyExperienceInfo }
        : { ...this.props.experienceInfo },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.isAddingNewExperience) {
      this.props.addExperience(this.state.expInfoCopy);
    } else {
      this.props.updateExperience(this.state.expInfoCopy);
    }

    this.props.cancelBtnAction();
  }

  handleChanges(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      expInfoCopy: {
        ...prevState.expInfoCopy,
        [name]: value,
      },
    }));
  }

  render() {
    const { location, area, yearFrom, yearTo, description } =
      this.state.expInfoCopy;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            required={true}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            name="area"
            id="area"
            value={area}
            required={true}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="year-from">Starting year:</label>
          <input
            type="number"
            name="yearFrom"
            id="year-from"
            value={yearFrom}
            min="1900"
            max="2099"
            step="1"
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="year-to">Finishing year:</label>
          <input
            type="number"
            name="yearTo"
            id="year-to"
            value={yearTo}
            min="1900"
            max="2099"
            step="1"
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-buttons">
          <button
            type="button"
            className="cancel-button"
            onClick={this.props.cancelBtnAction}
          >
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default ExperienceItemForm;
