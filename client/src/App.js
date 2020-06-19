import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from './components/Context/index';
import  { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CourseList from './components/CourseList.js';
import CourseDetail from './components/CourseDetail.js';
import UserSignIn from './components/UserSignIn.js';
import UserSignUp from './components/UserSignUp.js';
import UpdateCourse from './components/UpdateCourse.js';
import CreateCourse from './components/CreateCourse.js';

// Do not get a general component state here rather use courses state in relative components like courses details and index
class App extends Component {

  state = {
    courses: [],
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/courses")
    .then(res => res.json())
    .then((data) => {
      this.setState({ courses: data });
    })
    .catch(error => {
      console.log('error getching' + error);
    });
  }
  render(){
    return(
      <div>
      <Provider value={this.state.courses}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <CourseList coursesToList={this.state.courses} />} />
            <Route path="/course/:id" render={(props) => <CourseDetail coursesDetail={this.state.courses} {...props} />} />
            <Route path="/signin" render={() => <UserSignIn coursesDetail={this.state.courses} />} />
            <Route path="/signup" render={() => <UserSignUp coursesDetail={this.state.courses} />} />
            <Route path="/courses/:id/update" render={() => <UpdateCourse coursesDetail={this.state.courses} />} />
            <Route path="/courses/create" render={() => <CreateCourse coursesDetail={this.state.courses} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
      </div>
    )   
  }
}

export default App;


// Informtaion sent via routes should be corrected, I just wrote them like placeholders.
// Course id will be amended in routes