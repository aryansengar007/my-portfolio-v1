import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    className="contact full-page"
    id="contact"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <br />
    <h2>Contact Me</h2>
    <br />
    <form action="https://formspree.io/f/xyzjnqwy" method="POST">
        &nbsp;&nbsp; &nbsp;<label>Name :&nbsp;&nbsp;</label>
      <input type="text" name="name" required />

         &nbsp;&nbsp;&nbsp; &nbsp;<label>Email :&nbsp;&nbsp;</label>
      <input type="email" name="email" required />

        &nbsp;&nbsp; &nbsp; &nbsp;<label>Phone :&nbsp;&nbsp;</label>
      <input type="tel" name="phone" required />
<br />
<br />
       &nbsp; &nbsp;<label>Message :&nbsp;&nbsp;</label>
      <textarea name="message" required></textarea>
<br />
<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn">Send Message</button>
    </form>
    <div className="contact-info">
<br />
<br />
      <p>Email: sengararyan997@gmail.com</p>
      <p>Phone: +91 9318305645</p>
      <p>Location: Gurgaon, India - 122001</p>
    </div>
  </motion.section>
);

export default Contact;