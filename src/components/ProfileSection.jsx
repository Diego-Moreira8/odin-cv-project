import { useState } from "react";
import ProfileSectionDisplay from "./ProfileSectionDisplay";
import ProfileSectionEditing from "./ProfileSectionEditing";
import "../styles/ProfileSection.css";

function ProfileSection() {
  const storedInfo = JSON.parse(localStorage.getItem("userInfo"));
  const exampleInfo = {
    picture: "default",
    name: "Your Name",
    position: "Your Position",
    contactList: {
      phone: 12345678,
      email: "your.email@domain.com",
      linkedin: "linkedin.com/in/<YourUserName>",
      github: "github.com/<YourUserName>",
    },
  };

  const [userInfo, setUserInfo] = useState(
    storedInfo ? storedInfo : exampleInfo
  );

  const [isEditing, setIsEditing] = useState(false);

  const updateUserInfo = (newInfo) => {
    localStorage.setItem("userInfo", JSON.stringify({ ...newInfo }));
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
