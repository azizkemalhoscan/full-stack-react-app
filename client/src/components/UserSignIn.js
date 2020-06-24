import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { login } from './HelperFunctions';



class UserSignIn extends Component {
  state = {
    email: "",
    password: "",
    signinErrors: []
  };

  handleEmailEvent(event){
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordEvent(event){
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    const { context } = this.props;

    const username = this.state.email;
    const password = this.state.password;

    context.actions.signIn(username, password)
    .then( user => {
      if( user === null){
        this.setState(() => {
          return { signinErrors: ['Sign in is unsuccesfull'] }
        })
      } else {
        this.props.history.push('/');
        console.log(`SUCCESS! ${username} is now signed in!`);
      }
    }).catch( err => {
      console.log(err);
      this.props.history.push('/');
    // login(user)
    // .then(res => {
    //   if(res){
    //     this.props.history.push('/');
    //   }
    // })
    })
  }


    render(){
        return(

    <div id="root">
    <div>
      <hr></hr>
      <div class="bounds">
        <div class="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
              <div><input id="emailAddress" name="emailAddress" type="text" class="" placeholder="Email Address" value={this.state.email} onChange={(event) => {this.handleEmailEvent(event)}}></input></div>
              <div><input id="password" name="password" type="password" class="" placeholder="Password" value={this.state.password} onChange={(event) => {this.handlePasswordEvent(event)}}></input></div>
              <div class="grid-100 pad-bottom"><button class="button" type="submit">Sign In</button><Link to='/'><button class="button button-secondary">Cancel</button></Link></div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <a href="signup">Click here</a> to sign up!</p>
        </div>
      </div>
    </div>
  </div>
        )
    }
}

export default UserSignIn;







// Markup 

//   <div id="root">
//     <div>
//       <div class="header">
//         <div class="bounds">
//           <h1 class="header--logo">Courses</h1>
//           <nav><a class="signup" href="sign-up.html">Sign Up</a><a class="signin" href="sign-in.html">Sign In</a></nav>
//         </div>
//       </div>
//       <hr></hr>
//       <div class="bounds">
//         <div class="grid-33 centered signin">
//           <h1>Sign In</h1>
//           <div>
//             <form>
//               <div><input id="emailAddress" name="emailAddress" type="text" class="" placeholder="Email Address" value=""></input></div>
//               <div><input id="password" name="password" type="password" class="" placeholder="Password" value=""></input></div>
//               <div class="grid-100 pad-bottom"><button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
//             </form>
//           </div>
//           <p>&nbsp;</p>
//           <p>Don't have a user account? <a href="sign-up.html">Click here</a> to sign up!</p>
//         </div>
//       </div>
//     </div>
//   </div>