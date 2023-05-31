import React, { Component } from "react";
import "../styles/ProfileSection.css";
import profilePicture from "../images/profile-picture.jpg";
import ProfileSectionDisplay from "./ProfileSectionDisplay";
import ProfileSectionEditing from "./ProfileSectionEditing";

class ProfileSection extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      userInfo: {
        picture: profilePicture,
        name: "John Doe",
        position: "Web Developer",
        contactList: {
          phone: 5551234,
          email: "johndoe@domain.com",
          linkedin: "linkedin.com",
          github: "github.com",
        },
      },
    };

    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.startEditMode = this.startEditMode.bind(this);
  }

  updateUserInfo(newInfo) {
    this.setState((prevState) => ({
      ...prevState,
      isEditing: false,
      userInfo: {
        ...newInfo,
      },
    }));
  }

  startEditMode() {
    this.setState((prevState) => ({ ...prevState, isEditing: true }));
  }

  render() {
    return (
      <section className="profile-section">
        {this.state.isEditing ? (
          <ProfileSectionEditing
            userInfo={this.state.userInfo}
            updateUserInfo={this.updateUserInfo}
          />
        ) : (
          <ProfileSectionDisplay
            startEditMode={this.startEditMode}
            userInfo={this.state.userInfo}
          />
        )}
      </section>
    );
  }
}

export default ProfileSection;
