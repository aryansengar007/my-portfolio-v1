import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    className="hero full-page"
    id="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <img src="/B612_20230312_094627_017.png" alt="Aryan Sengar" className="profile-image" />

    <h1>Hi, I am Aryan Sengar</h1>
    <div className="cta-buttons">
      <a href="https://drive.google.com/file/d/1i7ks3CxxfQ-rCn7pj5uBDtQevKBH9hhr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn">View Resume</a> |
      <a href="/projects" className="btn"> View Projects</a> |
      <a href="/contact" className="btn"> Contact Me</a> |
      <a href="https://github.com/aryansengar007" target="_blank" rel="noopener noreferrer" className="btn"> GitHub</a> |
      <a href="https://www.linkedin.com/in/aryan-sengar-786b96290/" target="_blank" rel="noopener noreferrer" className="btn"> LinkedIn</a> |
      <a href="https://www.instagram.com/aryan_sengar007" target="_blank" rel="noopener noreferrer" className="btn"> Instagram</a>
    </div>
  </motion.section>
);

export default Hero;