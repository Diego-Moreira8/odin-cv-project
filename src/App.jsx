import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import MyFooter from "./components/MyFooter";
import "./styles/base.css";
import "./styles/App.css";

function App() {
  return (
    <div id="body">
      <Header />
      <main>
        <ProfileSection />
        <div className="experiences-group">
          <ExperienceSection experienceType="Education" />
          <ExperienceSection experienceType="Professional Experience" />
        </div>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
