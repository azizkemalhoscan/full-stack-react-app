import React, { Component } from 'react';

class UserSignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        confirmPassword: ""
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit () {
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
              if(errors.length) {
                  this.setState({ errors });
              } else {
                  console.log(`${firstName} is succesfully signed up!`)
              }
          }).catch( err => { 
            console.log(err);
            this.props.history.push('/');
          }); 
        // event.preventDefault();


        // axios
        // .post('http://localhost:5000/users', {
        //     user: {
        //         firstName: firstName,
        //         lastName: lastName,
        //         emailAddress: emailAddress,
        //         password: password,
        //         confirmPassword: confirmPassword
        //     }
        // }, { withCredentials: true }).then(response => console.log('response', response)
        // .catch(err => console.log('errors', err)))
    }

    cancel = () => {
        this.props.history.push('/');
       }

    render(){
        return(
            <div id="root">           
                <div>
                <hr></hr>
                <div class="bounds">
                    <div class="grid-33 centered signin">
                    <h1>Sign Up</h1>
                    <div>
                        <form onSubmit={() => {this.handleSubmit()}}>
                        <div><input id="firstName" name="firstName" type="text" className="" placeholder="First Name" onChange={(event) => {this.handleChange(event)}} value={this.state.firstName}></input></div>
                        <div><input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" onChange={(event) => {this.handleChange(event)}} value={this.state.lastName}></input></div>
                        <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" onChange={(event) => {this.handleChange(event)}} value={this.state.email}></input></div>
                        <div><input id="password" name="password" type="password" className="" placeholder="Password" onChange={(event) => {this.handleChange(event)}} value={this.state.password}></input></div>
                        <div><input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password"
                           onChange={(event) => {this.handleChange(event)}} value={this.state.confirmPassword}></input></div>
                        <div class="grid-100 pad-bottom"><button class="button" type="submit">Sign Up</button><button className="button button-secondary" href='/'> Cancel</button></div>
                        </form>
                    </div>
                    <p>&nbsp;</p>
                    <p>Already have a user account? <a href="sign-in.html">Click here</a> to sign in!</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default UserSignUp;


