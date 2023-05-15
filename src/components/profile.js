import React, {Component} from "react";
import profilePicture from "../images/profile-picture.jpg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import linkedinIcon from "../images/icon-linkedin.svg";
import githubIcon from "../images/icon-github.svg";

class UserLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {link, icon, text} = this.props
    return (
      <li>            
        <a href={link}>
          <img src={icon}/>
          {text}
        </a>
      </li>
    );
  }
}

class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="profile">
        <button type="button" className="edit">Edit</button>
        <div id="user-info">
          <img 
            id="profile-picture"
            src={profilePicture}
          />
          <h2>Jhon Doe</h2>
          <p>Front-End Developer</p>
        </div>
        
        <ul id="contact-list">
          <li>
            <UserLink link="#" icon={emailIcon} text="john.doe8@gmail.com" />
          </li>

          <li>
            <UserLink link="#" icon={phoneIcon} text="(123) 555-1234" />
          </li>

          <li>
            <UserLink link="#" icon={linkedinIcon} text="website1.com" />
          </li>

          <li>
            <UserLink link="#" icon={githubIcon} text="website2.com" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;