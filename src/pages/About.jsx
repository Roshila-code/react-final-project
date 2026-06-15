import MemberCard from "../components/MemberCard";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>

      <div className="members-container">
        <MemberCard
          name="Roshila Twanabasu"
          major="Information Technology"
          hobbies="Cooking, Learning Korean, Watching Movies"
        />

        <MemberCard
          name="Rabina Twanabasu"
          major="Information Technology"
          hobbies="Painting, Listening to Music, Dancing"
        />
      </div>
    </div>
  );
}

export default About;