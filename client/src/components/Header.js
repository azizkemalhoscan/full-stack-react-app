import React from 'react';

const Header = (props) => {
    return(
        <div>
        <div class="header">
            <div class="bounds">
                <h1 class="header--logo">Courses</h1>
                <nav><span>Welcome Joe Smith!</span><a class="signout" href="index.html">Sign Out</a></nav>
            </div>
        </div>
        <div className="header">
            <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav><a className="signup" href="sign-up.html">Sign Up</a><a class="signin" href="sign-in.html">Sign In</a></nav>
            </div>
        </div>
        </div>
    );
};

export default Header;


// There should be a ternary operator here checking if the user is signed in or not!