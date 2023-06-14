import profilePicture from "../images/profile-picture.jpg";
import catProfilePicture from "../images/profile-picture-cat.png";
import puppyProfilePicture from "../images/profile-picture-puppy.png";
import ProfileLink from "./ProfileLink";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
import githubIcon from "../images/icon-github.svg";
import "../styles/ProfileSectionDisplay.css";

function ProfileSectionDisplay({ userInfo, startEditMode }) {
  const { picture, name, position, contactList } = userInfo;
  const { phone, email, linkedin, github } = contactList;

  const getProfilePicture = () => {
    switch (picture) {
      case "default":
        return profilePicture;
      case "puppy":
        return puppyProfilePicture;
      case "cat":
        return catProfilePicture;
    }
  };

  return (
    <div className="profile-section-display">
      <button type="button" onClick={startEditMode}>
        Edit
      </button>
      <div className="profile-info">
        <img
          className="profile-picture"
          src={getProfilePicture()}
          alt="Profile picture"
        />
        <h2 className="profile-name">{name}</h2>
        <div className="profile-position">{position}</div>
      </div>

      <ul className="profile-contact-list">
        <ProfileLink link={"tel:" + phone} icon={phoneIcon} text={phone} />
        <ProfileLink link={"mailto:" + email} icon={emailIcon} text={email} />
        <ProfileLink
          link={"https://" + linkedin}
          icon={linkedinIcon}
          text={linkedin}
        />
        <ProfileLink
          link={"https://" + github}
          icon={githubIcon}
          text={github}
        />
      </ul>
    </div>
  );
}

export default ProfileSectionDisplay;
