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
        <div id="user-info">
          <img 
            id="profile-picture"
            src={profilePicture}
          />
          <h2>Jhon Doe</h2>
          <p>Front-End Developer</p>
        </div>
        
        <ol id="contact-list">
          <li>            
            <a href="#">
              <img src={emailIcon}/>
              john.doe8@gmail.com
            </a>
          </li>

          <li>            
            <a href="#">
              <img src={phoneIcon}/>
              (123) 555-1234
            </a>
          </li>

          <li>            
            <a href="#">
              <img src={linkedinIcon}/>
              website1.com
            </a>
          </li>

          <li>            
            <a href="#">
              <img src={githubIcon}/>
              website2.com
            </a>
          </li>
        </ol>
      </div>
    );
  }
}

export default Profile;