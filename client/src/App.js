import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Courses from './components/Courses.js';
import CourseDetail from './components/CourseDetail.js';
import UserSignIn from './components/UserSignIn.js';
import UserSignUp from './components/UserSignUp.js';
import Header from './components/Header.js';
import UpdateCourse from './components/UpdateCourse.js';
import CreateCourse from './components/CreateCourse.js';
import withContext from './components/Context/Context.js';
import PrivateRoute from './PrivateRoute';
import UserSignOut from './components/UserSignOut.js';
import NotFound from './components/Notfound.js';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const HeaderWithContext = withContext(Header);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const UserSignOutWithContext = withContext(UserSignOut);
const CourseDetailWithContext = withContext(CourseDetail);
const CourseListWithContext = withContext(Courses);

// Do not get a general component state here rather use courses state in relative components like courses details and index
class App extends Component {
  state = {
    courses: [],
  }

  // componentDidMount() {
  //   fetch("http://localhost:5000/api/courses")
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ courses: data });
  //   })
  //   .catch(error => {
  //     console.log('error getching' + error);
  //   });
  // }
  render(){
    return(
      <div>
      <HeaderWithContext />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CourseListWithContext} />
            <Route exact path="/signin" component={UserSignInWithContext} />
            <Route exact path="/signout" component={UserSignOutWithContext} />
            <Route exact path="/signup" component={UserSignUpWithContext} />
            <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />
            <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
            <Route exact path="/courses/:id" component={CourseDetailWithContext} />
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
        </BrowserRouter>
      </div>
    )   
  }
}

export default App;


// Informtaion sent via routes should be corrected, I just wrote them like placeholders.
// Course id will be amended in routes