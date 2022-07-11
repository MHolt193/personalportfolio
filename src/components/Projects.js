import React from "react";
import classes from "./Projects.module.css";
import sslv from "../images/sslv.png";
import kanban from "../images/kanbantaskmanager.png";
import drumMachine from "../images/drummachine.png";

const Projects = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <h1>PROJECTS</h1>
        <div className={classes.projectsContainer}>
          <div className={classes.projectCard}>
            <a
              href="https://sslv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={sslv}
                alt="screenshot of streaming service library viewer"
              />
            </a>
            <p className={classes.projectDescription}>
              SSLV combines all your streaming services into one! this project
              was done with ReactJS. it leverages the watchmode API along with
              the TMDB API. You can try it out by clicking on the project image
              or visit my <a href="https://github.com/MHolt193/SSLV">GitHub</a>
            </p>
            <p className={classes.projectTitle}>
              Streaming Service Library Viewer
            </p>
          </div>
          <div className={classes.projectCard}>
            <a
              href="https://mhkanbantaskmanager.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={kanban} alt="screenshot of kanban task manger" />
            </a>
            <p className={classes.projectDescription}>
              Kanban Task Manager does exactly what it sounds like, it manages
              tasks. This full stack project was built out using the MERN stack.
              Give it a try, and take a look at the code!{" "}
              <a href="https://github.com/MHolt193/kanbanbackend">Backend</a>
              <br />
              <a href="https://github.com/MHolt193/kanbantaskmanager">
                Frontend
              </a>{" "}
            </p>
            <p className={classes.projectTitle}>Kanban Task Manager</p>
          </div>
          <div className={classes.projectCard}>
            <a
              href="https://mhdrummachine.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={drumMachine} alt="screenshot of drum machine project" />
            </a>
            <p className={classes.projectDescription}>
              This project is a drum machine built as a freeCodeCamp project. It
              is built using ReactJS. This app was developed with a mobile first
              design in mind. You can view the code{" "}
              <a href="https://github.com/MHolt193/drum-machine">Here</a>
            </p>
            <p className={classes.projectTitle}>Drum Machine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
