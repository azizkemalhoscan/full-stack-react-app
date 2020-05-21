import React, { Component } from 'react';
import Header from './Header';
import CourseDetail from './CourseDetail';
import {
  Link
} from 'react-router-dom';

class CourseList extends Component {

    state = {
        courses: [],
        id: 0,
    };

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

      // const item = this.state.courses.map(course => 
      //   <CourseDetail 

      //   />
      //   );


    render(){
        return(
            <div>
            <Header />
            <hr />
            <div className="bounds">
            {this.state.courses.map(course =>
                <div className="grid-33"><a className="course--module course--link" href={`course/${course.id}`} >
                  <h4 className="course--label">Course</h4>
                  <h3 className="course--title">{course.title}</h3>
                  <h3 className="course--title">{course.id}</h3>
                </a>
                </div>            
            )}    
              <div className="grid-33"><a className="course--module course--add--module" href="/courses/create">
                  <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      viewBox="0 0 13 13" className="add">
                      <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                    </svg>New Course</h3>
                </a></div>
            </div>
        </div>
        )
    }
}


export default CourseList;


//  This markup is for header
{/* <div className="header">
<div className="bounds">
  <h1 class="header--logo">Courses</h1>
  <nav><a class="signup" href="sign-up.html">Sign Up</a><a class="signin" href="sign-in.html">Sign In</a></nav>
</div>
</div> */}

// Header is going to be fixed 
// Dom selector is going to be used/ Most probably
// href course/id will be amended to ensure it is static.

{/* <Link to={`/courses/${course.id}` }>More info</Link> */}