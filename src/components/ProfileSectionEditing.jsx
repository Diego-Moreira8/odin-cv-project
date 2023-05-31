import React, { Component } from "react";
// import ProfileLink from "./ProfileLink";
// import phoneIcon from "../images/icon-phone.svg";
// import emailIcon from "../images/icon-email.svg";
// import linkedinIcon from "../images/icon-linkedin.svg";
// import githubIcon from "../images/icon-github.svg";

class ProfileSectionEditing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfoCopy: { ...this.props.userInfo },
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      userInfoCopy: {
        ...prevState.userInfoCopy,
        [name]: value,
      },
    }));
  }

  render() {
    const { name, position, contactList } = this.state.userInfoCopy;
    const { phone, email, linkedin, github } = contactList;
    return (
      <form className="profile-section-editing">
        {/* PROFILE PICTURE */}
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            id="position"
            value={position}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone:</label>
          <input type="number" name="phone" id="phone" value={phone} />
        </div>
        <div className="form-row">
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" value={email} />
        </div>
        <div className="form-row">
          <label htmlFor="linkedin">LinkedIn:</label>
          <input type="url" name="linkedin" id="linkedin" value={linkedin} />
        </div>
        <div className="form-row">
          <label htmlFor="github">GitHub:</label>
          <input type="url" name="github" id="github" value={github} />
        </div>
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ProfileSectionEditing;
