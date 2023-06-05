import { v4 as uuid } from "uuid";
import "../styles/ProfileLink.css";

function ProfileLink({ link, icon, text }) {
  return (
    <li key={uuid()}>
      <a href={link} target="_blank">
        <img src={icon} />
        {text}
      </a>
    </li>
  );
}

export default ProfileLink;
