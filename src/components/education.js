import React, {Component} from "react";
import DescriptionBox from "./description-box";

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
            <DescriptionBox 
              location="Location" 
              area="Course" 
              period="20XX - 20XX" 
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
            />
            <DescriptionBox 
              location="Location" 
              area="Course" 
              period="20XX - 20XX" 
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
            />
            <DescriptionBox 
              location="Location" 
              area="Course" 
              period="20XX - 20XX" 
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
            />
            <DescriptionBox 
              location="Location" 
              area="Course" 
              period="20XX - 20XX" 
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
            />
            <DescriptionBox 
              location="Location" 
              area="Course" 
              period="20XX - 20XX" 
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
            />
            <DescriptionBox 
              location="Location" 
              area="Course" 
              period="20XX - 20XX" 
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
            />
            <DescriptionBox 
              location="Location" 
              area="Course" 
              period="20XX - 20XX" 
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Education;