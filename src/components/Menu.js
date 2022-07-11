import React from 'react';
import classes from './Menu.module.css'

const Menu = (props) =>{

    const {menuHandler, linkHandler} = props;

    return(
        <div className={classes.container}>
            <button className={classes.btn} onClick={menuHandler}>Close</button>
            <ul className={classes.list}>
                <li onClick={linkHandler}>HOME</li>
                <li onClick={linkHandler}>ABOUT ME</li>
                <li onClick={linkHandler}>PROJECTS</li>
                <li onClick={linkHandler}>CONTACT</li>
            </ul>
        </div>
    )
}

export default Menu