import React, { useState } from "react";
import ExperienceItemDisplay from "./ExperienceItemDisplay";
import ExperienceItemForm from "./ExperienceItemForm";

function ExperienceItem({
  experienceInfo,
  updateExperience,
  deleteExperience,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing((isEditing) => !isEditing);

  return isEditing ? (
    <ExperienceItemForm
      experienceInfo={experienceInfo}
      updateExperience={updateExperience}
      cancelBtnAction={toggleEditing}
    />
  ) : (
    <ExperienceItemDisplay
      experienceInfo={experienceInfo}
      deleteExperience={deleteExperience}
      toggleEditing={toggleEditing}
    />
  );
}

export default ExperienceItem;
