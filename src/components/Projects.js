import React from "react";

const projects = [
  {
    title: "Brain Tumor Classification",
    description: "Deep learning-powered web app classifying brain MRI/CT images with real-time prediction and PDF report generation.",
    tech: "Python, TensorFlow, Streamlit, Matplotlib",
    github: "https://github.com/aryansengar007/brain-tumor-classifier"
  },
  {
    title: "Movie Analytics Dashboard",
    description: "Python-based desktop app visualizing IMDb Top 1000 movies with interactive charts and genre filters.",
    tech: "Python, Tkinter, Matplotlib, Seaborn",
    github: "https://github.com/Nezeon/movie_dashboard-project",
  },
  {
    title: "Global Terrorism Trend Dashboard",
    description: "Interactive dashboard analyzing global terrorism patterns using statistical tests and data visualization.",
    tech: "Python, Streamlit, Pandas, Seaborn, SciPy",
    github: "https://github.com/Nezeon/Global-terrorism-trend-dashboard",
  },
  {
    title: "Quiz Game",
    description: "Console-based quiz game in C with multiple-choice questions on movies and TV series.",
    tech: "C",
    github: "https://github.com/aryansengar007/Quiz-Game-Project",
  },
  {
    title: "Student Grade Tracker",
    description: "Web app to track student grades with CRUD functionality.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/aryansengar007/CodeAlpha_StudentGradeTracker",
  },
  {
    title: "Synchronous 4-bit Up Counter",
    description: "Designed and simulated synchronous 4-bit up counter using Cadence Virtuoso (180nm CMOS process).",
    tech: "Cadence Virtuoso, CMOS Technology",
    github: "https://github.com/aryansengar007/Synchronous-4-bit-up-counter-using-180nm-CMOS-Technology",
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <br />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.tech}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;