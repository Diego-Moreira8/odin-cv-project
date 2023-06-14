import { useState } from "react";
import profilePicture from "../images/profile-picture.jpg";
import catProfilePicture from "../images/profile-picture-cat.png";
import puppyProfilePicture from "../images/profile-picture-puppy.png";
import "../styles/ProfileSectionEditing.css";

function ProfileSectionEditing({ userInfo, updateUserInfo }) {
  const [userInfoCopy, setUserInfoCopy] = useState({ ...userInfo });

  console.log(userInfoCopy.picture);

  const handleChanges = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "position" || name === "picture") {
      setUserInfoCopy((prevState) => ({ ...prevState, [name]: value }));
    } else {
      // Updating contact list
      setUserInfoCopy((prevState) => ({
        ...prevState,
        contactList: { ...prevState.contactList, [name]: value },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo(userInfoCopy);
  };

  const cancelChanges = () => updateUserInfo(userInfo);

  const { picture, name, position, contactList } = userInfoCopy;
  const { phone, email, linkedin, github } = contactList;
  return (
    <form className="profile-section-editing" onSubmit={handleSubmit}>
      <div className="form-row profile-picture">
        <div className="picture">
          <input
            type="radio"
            name="picture"
            id="default"
            value="default"
            checked={picture === "default"}
            onChange={handleChanges}
          />
          <label htmlFor="default">
            <img src={profilePicture} />
          </label>
        </div>
        <div className="picture">
          <input
            type="radio"
            name="picture"
            id="puppy"
            value="puppy"
            checked={picture === "puppy"}
            onChange={handleChanges}
          />
          <label htmlFor="puppy">
            <img src={puppyProfilePicture} />
          </label>
        </div>
        <div className="picture">
          <input
            type="radio"
            name="picture"
            id="cat"
            value="cat"
            checked={picture === "cat"}
            onChange={handleChanges}
          />
          <label htmlFor="cat">
            <img src={catProfilePicture} />
          </label>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          name="position"
          id="position"
          value={position}
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="linkedin">LinkedIn:</label>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          value={linkedin}
          onChange={handleChanges}
        />
      </div>
      <div className="form-row">
        <label htmlFor="github">GitHub:</label>
        <input
          type="text"
          name="github"
          id="github"
          value={github}
          onChange={handleChanges}
        />
      </div>
      <div className="form-buttons">
        <button type="button" className="cancel-button" onClick={cancelChanges}>
          Cancel
        </button>
        <button type="submit" className="save-button">
          Save
        </button>
      </div>
    </form>
  );
}

export default ProfileSectionEditing;
