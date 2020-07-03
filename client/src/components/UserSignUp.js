import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserSignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        errors: [],
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

// This method registers a user as well as it makes registered user to signed in immediately.

    handleSubmit (e) {

        e.preventDefault();

        const { firstName, lastName, emailAddress, password, confirmPassword } = this.state;
        const { context } = this.props;

        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
          };

          context.data.createUser(user)
          .then(errors => {
            return this.setState({
                errors: errors
            })
    })
          .then(res => {
              if(res ===201) {
                  return "done!"
              }
          })
          context.actions.signIn(emailAddress, password)
          .then( user => {
            if( user === null){
              this.setState(() => {
                return { signinErrors: ['Sign in is unsuccesfull'] }
              })
            } else {
              this.props.history.push('/');
              console.log(`SUCCESS! ${this.state.emailAddress} is now signed in!`);
            }
          }).catch( err => {
            console.log(err);
            this.props.history.push('/');
          })
        //   context.actions.signIn(this.state.emailAddress, this.state.password)
          
    }


    cancel = () => {
        this.props.history.push('/');
       }

    render(){
        console.log(this.state.errors)
        const errorMessages = this.state.errors.map(error => {
            return (<div className="validation-errors">
              <ul>
                {error}
              </ul>
            </div>)
        })

        const validationErrors = errorMessages.length ? "Validation errors" : null;
        return(
            <div id="root">           
                <div>
                <hr></hr>
                <div className="bounds">
                    <div className="grid-33 centered signin">
                    <h1>Sign Up</h1>
                    <div>
                    <div>
                    <h2 className="validation--errors--label">{validationErrors}</h2>
                    </div>
                        {errorMessages}
                    </div>
                    <div>
                        <form onSubmit={(e) => {this.handleSubmit(e)}} >
                        <div><input id="firstName" name="firstName" type="text" className="" placeholder="First Name" onChange={(event) => {this.handleChange(event)}} value={this.state.firstName}></input></div>
                        <div><input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" onChange={(event) => {this.handleChange(event)}} value={this.state.lastName}></input></div>
                        <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" onChange={(event) => {this.handleChange(event)}} value={this.state.email}></input></div>
                        <div><input id="password" name="password" type="password" className="" placeholder="Password" onChange={(event) => {this.handleChange(event)}} value={this.state.password}></input></div>
                        <div><input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password"
                           onChange={(event) => {this.handleChange(event)}} value={this.state.confirmPassword}></input></div>
                        <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign Up</button><Link to='/'><button className="button button-secondary" href='/'> Cancel</button></Link></div>
                        </form>
                    </div>
                    <p>&nbsp;</p>
                    <p>Already have a user account? <a href="/signin">Click here</a> to sign in!</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default UserSignUp;


