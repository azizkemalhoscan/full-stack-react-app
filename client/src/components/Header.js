import React from 'react';

const Header = (props) => {
    const { context } = props;


    const authUser = context.authenticatedUser;
    console.log(authUser);

    const conditionalHeaderRender = authUser ? 
        <div className="header">
            <div className="bounds">  
                <h1 className="header--logo">Courses</h1>
                <nav><span>{`Welcome ${authUser.firstName}!`}</span><a className="signout" href="signout">Sign Out</a></nav>
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