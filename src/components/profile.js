import React, {Component} from "react";
import profilePicture from "../images/profile-picture.jpg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
import githubIcon from "../images/icon-github.svg";

class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="profile">
        <img 
          src={profilePicture}
          width="200" 
          height="200"
        />

        <h2>Jhon Doe</h2>
        <p>Front-End Developer</p>

        <div className="contact-group">
          <img 
            src={emailIcon}
            height="100"
          />
          <p>john.doe8@gmail.com</p>
        </div>

        <div className="contact-group">
          <img 
            src={phoneIcon}
            height="100"
          />
          <p>(123) 555-1234</p>
        </div>

        <div className="contact-group">
          <img 
            src={linkedinIcon}
            height="100"
          />
          <p>website1.com</p>
        </div>

        <div className="contact-group">
          <img 
            src={githubIcon}
            height="100"
          />
          <p>website2.com</p>
        </div>
      </div>
    );
  }
}

export default Profile;