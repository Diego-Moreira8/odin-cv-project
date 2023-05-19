import React, { Component } from "react";

class DescriptionForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="description-editing">
        <div className="form-row">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" />
        </div>

        <div className="form-row">
          <label htmlFor="area">Area</label>
          <input type="text" id="area" />
        </div>

        <div className="form-row form-dates">
          <label htmlFor="period-from">From</label>
          <input type="number" minLength="4" maxLength="4" id="period-from" />

          <label htmlFor="period-to">To</label>
          <input type="number" minLength="4" maxLength="4" id="period-to" />
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="3"></textarea>
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit" className="save">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default DescriptionForm;
