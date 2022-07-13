import React from 'react';
import classes from './Menu.module.css'

const Menu = (props) =>{

    const {menuHandler, linkHandler} = props;

    return(
        <div className={classes.container}>
            <button className={classes.btn} onClick={menuHandler}>Close</button>
            <ul className={classes.list}>
                <li onClick={linkHandler}><button type="button" aria-label="menu option: Home">HOME</button></li>
                <li onClick={linkHandler}><button  type="button" aria-label="menu option: about me">ABOUT ME</button></li>
                <li onClick={linkHandler}><button  type="button" aria-label=" menu option: projects">PROJECTS</button></li>
                <li onClick={linkHandler}><button type="button" aria-label="menu option: contact">CONTACT</button></li>
            </ul>
        </div>
    )
}

export default Menu