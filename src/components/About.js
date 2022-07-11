import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.subTag}>WEB DEVELOPER</h3>
      <div className={classes.contentContainer}>
        <h1>ABOUT ME</h1>
        <p>
          I am a web developer currently based in Idaho. I am a dependable, hard
          working person who is always motivated to learn new skills. Co-Workers
          would describe me as helpful and easy to work with. Throughout my
          working career I have always been driven to deliver consistently
          strong and high quality results.{" "}
        </p>
      </div>
      <p className={classes.name}>MICHAEL HOLT</p>
    </div>
  );
};

export default About;
