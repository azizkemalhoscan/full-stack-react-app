import React from 'react';

const Header = (props) => {

    return(
        <div>
        <div className="header">
            <div className="bounds">
            
                <h1 className="header--logo">Courses</h1>
                <nav><span>Welcome Joe Smith!</span><a className="signout" href="index.html">Sign Out</a></nav>
            </div>
        </div>
        <div className="header">
            <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav><a className="signup" href="sign-up.html">Sign Up</a><a className="signin" href="signin">Sign In</a></nav>
            </div>
        </div>
        </div>
    );
};

export default Header;


// There should be a ternary operator here checking if the user is signed in or not!