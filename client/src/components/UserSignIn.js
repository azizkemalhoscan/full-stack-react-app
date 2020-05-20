import React, { Component } from 'react';
import Header from './Header';
class UserSignIn extends Component {

    render(){
        return(

    <div id="root">
     <Header />
    <div>
      <hr></hr>
      <div class="bounds">
        <div class="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form>
              <div><input id="emailAddress" name="emailAddress" type="text" class="" placeholder="Email Address" value=""></input></div>
              <div><input id="password" name="password" type="password" class="" placeholder="Password" value=""></input></div>
              <div class="grid-100 pad-bottom"><button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <a href="sign-up.html">Click here</a> to sign up!</p>
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