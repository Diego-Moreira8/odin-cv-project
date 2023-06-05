import { useState } from "react";
import { v4 as uuid } from "uuid";
import "../styles/ExperienceItemForm.css";

function ExperienceItemForm({
  experienceInfo,
  addExperience,
  updateExperience,
  cancelBtnAction,
}) {
  const emptyExperienceInfo = {
    id: uuid(),
    location: "",
    area: "",
    yearFrom: new Date().getFullYear(),
    yearTo: new Date().getFullYear(),
    description: "",
  };

  const [expInfoCopy, setExpInfoCopy] = useState(
    experienceInfo ? experienceInfo : emptyExperienceInfo
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (experienceInfo) {
      updateExperience(expInfoCopy);
    } else {
      addExperience(expInfoCopy);
    }

    cancelBtnAction();
  };

  const handleChanges = (e) => {
    setExpInfoCopy((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { location, area, yearFrom, yearTo, description } = expInfoCopy;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          required={true}
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          name="area"
          id="area"
          value={area}
          required={true}
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="year-from">Starting year:</label>
        <input
          type="number"
          name="yearFrom"
          id="year-from"
          value={yearFrom}
          min="1900"
          max="2099"
          step="1"
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="year-to">Finishing year:</label>
        <input
          type="number"
          name="yearTo"
          id="year-to"
          value={yearTo}
          min="1900"
          max="2099"
          step="1"
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={handleChanges}
        />
      </div>
      <div className="form-buttons">
        <button
          type="button"
          className="cancel-button"
          onClick={cancelBtnAction}
        >
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default ExperienceItemForm;
