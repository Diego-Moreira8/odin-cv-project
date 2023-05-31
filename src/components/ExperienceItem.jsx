import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export default class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, area, from, to, description } = this.props;
    return (
      <li key={uuid()}>
        <h3 className="exp-location">{location}</h3>
        <h3 className="exp-area">{area}</h3>
        <div className="exp-period">
          <span className="exp-period-from">{from}</span>
          <span className="exp-period-to">{to}</span>
        </div>
        <p className="exp-description">{description}</p>
      </li>
    );
  }
}
