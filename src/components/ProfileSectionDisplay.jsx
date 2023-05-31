import React, { Component } from "react";
import ProfileLink from "./ProfileLink";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
import githubIcon from "../images/icon-github.svg";

class ProfileSectionDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { picture, name, position, contactList } = this.props.userInfo;
    const { phone, email, linkedin, github } = contactList;
    return (
      <div className="profile-section-display">
        <button type="button" onClick={this.props.startEditMode}>
          Edit
        </button>
        <div className="profile-info">
          <img
            className="profile-picture"
            src={picture}
            alt="Profile picture"
          />
          <h2 className="profile-name">{name}</h2>
          <div className="profile-position">{position}</div>
        </div>

        <ul className="profile-contact-list">
          <ProfileLink link={"tel:" + phone} icon={phoneIcon} text={phone} />
          <ProfileLink link={"mailto:" + email} icon={emailIcon} text={email} />
          <ProfileLink link={linkedin} icon={linkedinIcon} text={linkedin} />
          <ProfileLink link={github} icon={githubIcon} text={github} />
        </ul>
      </div>
    );
  }
}

export default ProfileSectionDisplay;
