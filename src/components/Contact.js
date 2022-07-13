import React from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.titleContainer}>
          <h1>let's work</h1>
          <h2>Together</h2>
        </div>
        <form
          className={classes.formContainer}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify
        >
            <input type="hidden" name="form-name" value="contact" />
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Message me!" name="message" required />
          <button type="submit" name="submit button">Submit</button>
        </form>
        <div className={classes.icons}>
          <a href="https://www.linkedin.com/in/michael-holt-14b093213/">
            <GrLinkedin />
          </a>
          <a href="https://github.com/MHolt193">
            <GrGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
