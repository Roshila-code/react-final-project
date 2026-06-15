import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div>
      <h1>Our Projects</h1>

      <div className="projects-container">
        <ProjectCard
          title="React Portfolio Website"
          description="Built using React Router, useState, useEffect, localStorage, and reusable components."
        />

        <ProjectCard
          title="Hospital Database Project"
          description="Designed a rural healthcare database using SQL and normalization concepts."
        />

        <ProjectCard
          title="Product List Application"
          description="Developed using React Router and dynamic routing."
        />

        <ProjectCard
          title="Todo List Application"
          description="Created a Todo app with localStorage support."
        />

        <ProjectCard
          title="Student Grade Calculator"
          description="Calculates and displays student grades using JavaScript."
        />

        <ProjectCard
          title="Weather App"
          description="Displays weather information and forecasts."
        />

        <ProjectCard
          title="Contact Management System"
          description="Allows users to add, edit, and delete contacts."
        />
         
         <ProjectCard
          title="Expense Tracker"
          description="Tracks daily expenses and helps users manage their budget."
        />

      </div>
    </div>
  );
}

export default Projects;