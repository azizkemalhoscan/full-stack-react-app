import React, { Component } from 'react';
import Data from '../../Data';
import Cookies from 'js-cookie';

const Context = React.createContext();

// This is my context component. It is to provide information to the whole application.

export class Provider extends Component {
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
  }
    constructor(){
        super();
        this.data = new Data();
    }
    render() {
      const { authenticatedUser } = this.state;

// Values to be passed into the context provider to be distributed among all components.

      const value = {
        authenticatedUser,
        data: this.data,
        actions: {
          signIn: this.signIn,
          signOut: this.signOut,
        }
      };

      //  Returning context provider with value to provide other components with values and also some actions.
    return (
        <Context.Provider value={value}>
          {this.props.children}
        </Context.Provider>  
      );
    }

    

// Signin method is for signing in a user, It gets user data by the help of getuser function in data.js/Data
// Cookies are used to persist user's data to keep him logged in for a day and among other Urls of this app.

    signIn = async (emailAddress, password) => {

      const user = await this.data.getUser(emailAddress, password);
      if( user !== null){
        this.setState(() => {
          return { authenticatedUser: user
          }
        });
        Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
      }
      return user;
    }

// Signout basically removes cookies and sets authenticated user to null.

    signOut = () => {
      this.setState({ authenticatedUser: null });
      Cookies.remove('authenticatedUser');
    }

}

// This part of the component is for subscribing other components to changes that happen in context.

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}

export const Consumer = Context.Consumer;






