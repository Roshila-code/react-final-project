function MemberCard({ name, major, hobbies }) {
  return (
    <div className="member-card">
      <h2>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Hobbies:</strong> {hobbies}</p>
    </div>
  );
}

export default MemberCard;