import React from 'react';
import { Redirect } from 'react-router-dom';
const UserSignOut = ({context}) => {
    context.actions.signOut();
    return(
     <Redirect to="/" />    
    )
};

export default UserSignOut;

// This component does NOT render anything rather it just signs out the user. So sign out function fill be here.