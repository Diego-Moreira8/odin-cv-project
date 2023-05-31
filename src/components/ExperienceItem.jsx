import React, { Component } from "react";

export default class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expInfo, deleteExpItem } = this.props;
    const { id, location, area, yearFrom, yearTo, description } = expInfo;
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
        <button
          type="button"
          title="Double click to delete"
          onDoubleClick={() => deleteExpItem(id)}
        >
          Delete
        </button>
      </>
    );
  }
}
