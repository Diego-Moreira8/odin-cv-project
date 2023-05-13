import React, {Component} from "react";

class EducationInfo extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="edu-info-group">
        <h3>Location</h3>
        <h3>Course</h3>
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

class Education extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="education">
        <h2>Education</h2>
          <div className="history">
          <button type="button">Add</button>
            <div className="history-list">
              <EducationInfo />
              <hr />
              <EducationInfo />
            </div>
          </div>
      </div>
    );
  }
}

export default Education;