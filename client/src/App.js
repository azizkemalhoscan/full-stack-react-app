import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CourseList from './components/CourseList.js';
import CourseDetail from './components/CourseDetail.js';

// Do not get a general component state here rather use courses state in relative components like courses details and index
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    };
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <CourseList coursesToList={this.state.courses} />} />
          <Route path="/course-detail.html" render={() => <CourseDetail coursesDetail={this.state.courses} />} />
        </Switch>
      </BrowserRouter>
      </div>
    )   
  }
}

export default App;


// Informtaion sent via routes should be corrected, I just wrote them like placeholders.