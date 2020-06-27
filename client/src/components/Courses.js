import React, { Component } from 'react';
// import CourseDetail from './CourseDetail';
import {
  Link
} from 'react-router-dom';

class Courses extends Component {

    state = {
        courses: [],
    };

    componentDidMount() {
        fetch("http://localhost:5000/api/courses")
        .then(res => res.json())
        .then((data) => {
          this.setState({ courses: data });
        })
        .catch(error => {
          console.log('error catching' + error);
        });
      }

      // const item = this.state.courses.map(course => 
      //   <CourseDetail 

      //   />
      //   );


    render(){

      let coursesList = this.state.courses.map(course =>{
        return (
            <div className="grid-33"><a className="course--module course--link" href={`courses/${course.id}`} >
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{course.title}</h3>
            <h3 className="course--title">{course.id}</h3>
          </a>
        </div>               
        )
      })
        return(
            <div>
            <hr />
            <div className="bounds">
            <div>
            {coursesList}  
            </div>          
              <div className="grid-33"><Link to="/course/create"><a className="course--module course--add--module" >
                  <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      viewBox="0 0 13 13" className="add">
                      <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                    </svg>New Course</h3>
                </a></Link></div>
            </div>
        </div>
        )
    }
}


export default Courses;


//  This markup is for header


// Header is going to be fixed 
// Dom selector is going to be used/ Most probably
// href course/id will be amended to ensure it is static.

