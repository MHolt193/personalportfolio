import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Menu from "./Menu";
import classes from "./Home.module.css";
import { BsThreeDots } from "react-icons/bs";

const Home = () => {
  const [activePage, setActivePage] = useState("HOME");
  const [menuUp, setMenuUp] = useState(false);

  const menuHandler = () => {
    setMenuUp(!menuUp);
  };
  const linkHandler = (e) => {
    setActivePage(e.target.innerText);
    console.log(e.target.innerText);
    setMenuUp(!menuUp);
  };

  const homeButtonMouseEnter = (e) => {
    e.target.innerText = "See projects"
  }
  const homeButtonMouseLeave = (e) => {
    e.target.innerText = "WEB DEVELOPER"
  }
  const homeButtonClick = (e) => {
    setActivePage('PROJECTS');
  }

  return (
    <div className={classes.container}>
      {menuUp === false ? (
        <button className={classes.menuButton} aria-label="Menu Button" onClick={menuHandler}>
          <BsThreeDots />
        </button>
      ) : (
        <Menu menuHandler={menuHandler} linkHandler={linkHandler} />
      )}
      {activePage === "HOME" ? (
        <div className={classes.contentContainer}>
          <h1>Michael Holt</h1>
          <button onMouseEnter={homeButtonMouseEnter} onMouseLeave={homeButtonMouseLeave} onClick={homeButtonClick} aria-label="view projects button">WEB DEVELOPER</button>
        </div>
      ) : activePage === "ABOUT ME" ? (
        <About menuHandler={menuHandler} linkHandler={linkHandler} />
      ) : activePage === "PROJECTS" ? (
        <Projects menuHandler={menuHandler} linkHandler={linkHandler} />
      ) : (
        activePage === "CONTACT" && (
          <Contact menuHandler={menuHandler} linkHandler={linkHandler} />
        )
      )}
    </div>
  );
};

export default Home;
