import React, { Component } from "react";

class ProfileSectionEditing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfoCopy: { ...this.props.userInfo },
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
  }

  handleChanges(e) {
    const { name, value } = e.target;

    if (name === "name" || name === "position") {
      this.setState((prevState) => ({
        userInfoCopy: {
          ...prevState.userInfoCopy,
          [name]: value,
        },
      }));
    } else {
      // Updating contact list
      this.setState((prevState) => ({
        userInfoCopy: {
          ...prevState.userInfoCopy,
          contactList: {
            ...prevState.userInfoCopy.contactList,
            [name]: value,
          },
        },
      }));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUserInfo(this.state.userInfoCopy);
  }

  cancelChanges() {
    this.props.updateUserInfo(this.props.userInfo);
  }

  render() {
    const { name, position, contactList } = this.state.userInfoCopy;
    const { phone, email, linkedin, github } = contactList;
    return (
      <form className="profile-section-editing" onSubmit={this.handleSubmit}>
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
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            value={linkedin}
            onChange={this.handleChanges}
          />
        </div>
        <div className="form-row">
          <label htmlFor="github">GitHub:</label>
          <input
            type="text"
            name="github"
            id="github"
            value={github}
            onChange={this.handleChanges}
          />
        </div>
        <button type="button" onClick={this.cancelChanges}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ProfileSectionEditing;
