import React from 'react';

const Header = (props) => {
    const { context } = props;


// Ternary operator is used to configure the UI of Header. Checking if the user is authenticated or not.

    const conditionalHeaderRender = context.authenticatedUser ? 
        <div className="header">
            <div className="bounds">  
                <h1 className="header--logo">Courses</h1>
                <nav><span>{`Welcome ${context.authenticatedUser.firstName}!`}</span><a className="signout" href="/signout">Sign Out</a></nav>
            </div>
        </div> 
    : 
        <div className="header">
            <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav><a className="signup" href="signup">Sign Up</a><a className="signin" href="signin">Sign In</a></nav>
            </div>
        </div>

    return(
        <div>
            {conditionalHeaderRender}
        </div>
    );
};

export default Header;


// There should be a ternary operator here checking if the user is signed in or not!