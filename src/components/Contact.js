import React from 'react';
import classes from "./Contact.module.css"

const Contact = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.contentContainer}>
            <div className={classes.titleContainer}>
            <h1>let's work</h1>
            <h2>Together</h2>
            </div>
            <form className={classes.formContainer} method="POST" netlify>
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email" name="email" required />
                <textarea placeholder="Message me!" required/>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Contact