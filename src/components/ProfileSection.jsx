import { useState } from "react";
import profilePicture from "../images/profile-picture.jpg";
import ProfileSectionDisplay from "./ProfileSectionDisplay";
import ProfileSectionEditing from "./ProfileSectionEditing";
import "../styles/ProfileSection.css";

function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    picture: profilePicture,
    name: "Your Name",
    position: "Your Position",
    contactList: {
      phone: 12345678,
      email: "your.email@domain.com",
      linkedin: "linkedin.com/in/<YourUserName>",
      github: "github.com/<YourUserName>",
    },
  });

  const updateUserInfo = (newInfo) => {
    setUserInfo({ ...newInfo });
    setIsEditing(false);
  };

  const startEditMode = () => setIsEditing(true);

  return (
    <section className="profile-section">
      {isEditing ? (
        <ProfileSectionEditing
          userInfo={userInfo}
          updateUserInfo={updateUserInfo}
        />
      ) : (
        <ProfileSectionDisplay
          userInfo={userInfo}
          startEditMode={startEditMode}
        />
      )}
    </section>
  );
}

export default ProfileSection;
