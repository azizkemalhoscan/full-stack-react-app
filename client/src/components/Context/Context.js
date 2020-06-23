import React, { Component } from 'react';
import Data from '../../Data';

const Context = React.createContext();

export class Provider extends Component {
    constructor(){
        super();
        this.data = new Data();
    }
    render() {
      const value = {
        data: this.data,
        actions: {
          signIn: this.signIn,
        }
      };

    return (
        <Context.Provider value={value}>
          {this.props.children}
        </Context.Provider>  
      );
    }

    signIn = async (username, password) => {
      const user = await this.data.getUSer(username, password);
      return user;
    }
}

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}








