import React, {Component} from "react";

class DescriptionBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {location, area, period, description} = this.props;
    return (
      <div className="description-group">
        <h3>{location}</h3>
        <h3>{area}</h3>
        <p><strong>{period}</strong></p>
        <p>{description}</p>
      </div>
    );
  }
}

export default DescriptionBox;