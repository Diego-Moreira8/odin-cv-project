import React, { Component } from "react";
import "../styles/ProfileSection.css";
import profilePicture from "../images/profile-picture.jpg";
import ProfileSectionDisplay from "./ProfileSectionDisplay";
import ProfileSectionEditing from "./ProfileSectionEditing";

class ProfileSection extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: true,
      userInfo: {
        picture: profilePicture,
        name: "John Doe",
        position: "Web Developer",
        contactList: {
          phone: "555-1234",
          email: "johndoe@domain.com",
          linkedin: "linkedin.com",
          github: "github.com",
        },
      },
    };
  }

  render() {
    return (
      <section className="profile-section">
        {this.state.isEditing ? (
          <ProfileSectionEditing userInfo={this.state.userInfo} />
        ) : (
          <ProfileSectionDisplay userInfo={this.state.userInfo} />
        )}
      </section>
    );
  }
}

export default ProfileSection;
