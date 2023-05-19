import React, { Component } from "react";
import "../styles/ProfileSection.css";
import profilePicture from "../images/profile-picture.jpg";
import ProfileLink from "./ProfileLink";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
import githubIcon from "../images/icon-github.svg";

export default class ProfileSection extends Component {
  constructor() {
    super();
    this.state = {
      picture: profilePicture,
      name: "John Doe",
      position: "Web Developer",
      contactList: {
        phone: "555-1234",
        email: "johndoe@domain.com",
        linkedin: "",
        github: "",
      },
    };
  }

  render() {
    const { picture, name, position, contactList } = this.state;
    const { phone, email, linkedin, github } = contactList;
    return (
      <section className="profile-section">
        <div className="profile-info">
          <img className="profile-picture" src={picture} />
          <h2 className="profile-name">{name}</h2>
          <div className="profile-position">{position}</div>
        </div>

        <ul className="profile-contact-list">
          <ProfileLink link={phone} icon={phoneIcon} text={phone} />
          <ProfileLink link={email} icon={emailIcon} text={email} />
          <ProfileLink link={linkedin} icon={linkedinIcon} text={linkedin} />
          <ProfileLink link={github} icon={githubIcon} text={github} />
        </ul>
      </section>
    );
  }
}
