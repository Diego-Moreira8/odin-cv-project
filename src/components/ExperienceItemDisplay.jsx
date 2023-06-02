import React, { Component } from "react";

class ExperienceItemDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experienceInfo, deleteExperience } = this.props;
    const { id, location, area, yearFrom, yearTo, description } =
      experienceInfo;
    return (
      <>
        <h3 className="exp-location">{location}</h3>
        <h3 className="exp-area">{area}</h3>
        <div className="exp-period">
          <span className="exp-period-from">{yearFrom}</span>
          {" to "}
          <span className="exp-period-to">{yearTo}</span>
        </div>
        <p className="exp-description">{description}</p>
        <button type="button" onClick={this.props.toggleEditing}>
          Edit
        </button>
        <button
          type="button"
          title="Double click to delete"
          onDoubleClick={() => deleteExperience(id)}
        >
          Delete
        </button>
      </>
    );
  }
}

export default ExperienceItemDisplay;
