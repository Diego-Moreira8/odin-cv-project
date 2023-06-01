import React, { Component } from "react";

class ExperienceItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expInfoCopy: { ...this.props.expInfo },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateItem(this.state.expInfoCopy);
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
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Finishing year:</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={this.handleChanges}
          />
        </div>
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ExperienceItemForm;
