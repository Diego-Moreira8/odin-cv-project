import { useState, useEffect } from "react";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import ExperienceItem from "./ExperienceItem";
import ExperienceItemForm from "./ExperienceItemForm";
import "../styles/ExperienceSection.css";

function ExperienceSection({ experienceType }) {
  const [isAddingNewExp, setIsAddingNewExp] = useState(false);

  const storedInfo = JSON.parse(
    localStorage.getItem(_.camelCase(experienceType))
  );
  const experienceExample = [
    {
      id: uuid(),
      location: "A university",
      area: "A course",
      yearFrom: 2016,
      yearTo: 2020,
      description: "A brief text that describes your experience.",
    },
  ];

  const [experienceList, setExperienceList] = useState(
    storedInfo ? storedInfo : experienceExample
  );

  useEffect(
    function updateLocalStorage() {
      localStorage.setItem(
        _.camelCase(experienceType),
        JSON.stringify([...experienceList])
      );
    },
    [experienceList]
  );

  const toggleIsAddingNewExp = () =>
    setIsAddingNewExp((prevState) => !prevState);

  const addExperience = (newExperience) => {
    setExperienceList((prevState) => [...prevState, newExperience]);
  };

  const updateExperience = (newExperience) => {
    const experienceListCopy = [...experienceList];
    const indexToUpdate = experienceListCopy.findIndex(
      (experience) => experience.id === newExperience.id
    );
    experienceListCopy[indexToUpdate] = { ...newExperience };
    setExperienceList([...experienceListCopy]);
  };

  const deleteExperience = (id) =>
    setExperienceList((prevState) =>
      prevState.filter((experience) => experience.id !== id)
    );

  return (
    <section className="experience-section">
      <h2 className="experience-section-header">{experienceType}</h2>

      <div className="experience-section-box">
        {isAddingNewExp ? (
          <>
            <h3>New item:</h3>
            <ExperienceItemForm
              addExperience={addExperience}
              updateExperience={updateExperience}
              cancelBtnAction={toggleIsAddingNewExp}
            />
          </>
        ) : (
          <button
            type="button"
            className="add-experience-button"
            onClick={toggleIsAddingNewExp}
          >
            Add
          </button>
        )}

        <ul className="history-list">
          {experienceList.map((experience) => (
            <li key={experience.id}>
              <ExperienceItem
                experienceInfo={experience}
                updateExperience={updateExperience}
                deleteExperience={deleteExperience}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection;
