import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "../styles/ProfileLink.css";

export default class ProfileLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { link, icon, text } = this.props;
    return (
      <li key={uuid()}>
        <a href={link} target="_blank">
          <img src={icon} />
          {text}
        </a>
      </li>
    );
  }
}
