import React, { Component } from "react";
import profilePicture from "../images/profile-picture.jpg";
import ProfileSectionDisplay from "./ProfileSectionDisplay";
import ProfileSectionEditing from "./ProfileSectionEditing";
import "../styles/ProfileSection.css";

class ProfileSection extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      userInfo: {
        picture: profilePicture,
        name: "Your Name",
        position: "Your Position",
        contactList: {
          phone: 12345678,
          email: "your.email@domain.com",
          linkedin: "linkedin.com/in/<YourUserName>",
          github: "github.com/<YourUserName>",
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
