import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import "../styles/ExperienceSection.css";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expType, deleteExpItem } = this.props;
    return (
      <section className="experience-section">
        <h2 className="experience-section-header">{expType}</h2>
        <div className="experience-section-box">
          <button type="button" className="add-experience-button">
            Add
          </button>
          <ul className="history-list">
            {this.props.expList.map((item) => (
              <li key={item.id}>
                <ExperienceItem expInfo={item} deleteExpItem={deleteExpItem} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
