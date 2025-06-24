import React from "react";

const skills = {
  
  Languages: ["Java", "Python", "C", "SQL", "MATLAB", "MQL"],
  Concepts: ["DSA", "Cybersecurity", "VLSI", "DBMS", "Computer Networks", "Discrete Mathematics", "AI/ML", "SQL"],
  Tools: ["VS Code", "Eclipse", "Jupyter", "MySQL", "MongoDB", "Canva", "Filmora", "CapCut", "Netlify", "Nmap", "Nessus", "Metasploit", "Wireshark", "GitHub"],
};

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    {Object.entries(skills).map(([category, items]) => (
      <div key={category} className="skill-category">
        <br />
        <h3>{category}</h3>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Skills;