import React, { Component } from "react";
import uniqid from "uniqid";

export default class ProfileLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { link, icon, text } = this.props;
    return (
      <li key={uniqid()}>
        <a href={link} target="_blank">
          <img src={icon} />
          {text}
        </a>
      </li>
    );
  }
}
