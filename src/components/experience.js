import React, {Component} from "react";

class ExperienceInfo extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="exp-info-group">
        <h3>Location</h3>
        <h3>Job</h3>
        <p><strong>20XX - 20XX</strong></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa 
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis 
          tellus. 
        </p>
      </div>
    );
  }
}

class Experience extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="experience">
        <h2>Experience</h2>
        <div className="history">
          <button type="button">Add</button>
            <div className="history-list">
              <ExperienceInfo />
              <hr />
              <ExperienceInfo />
            </div>
          </div>
      </div>
    );
  }
}

export default Experience;