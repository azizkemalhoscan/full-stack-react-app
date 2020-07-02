import React, { Component } from 'react';
// import CourseDetail from './CourseDetail';
import CourseView from './CourseView';
class Courses extends Component {

    state = {
        courses: [],
    };

  

      componentDidMount () {
        const { context } = this.props;
        context.data.getCourses().then(
          response => this.setState({courses: response})
        )
        .catch(error => {
          console.log('FAILLLLSSS error catching' + error);
        });
      }

    render(){

// Loop over and send realtive values to CourseView component!.

      let coursesList = this.state.courses.map(course =>{
        return (
          <CourseView title={course.title} identity={course.id} key={course.id} />            
        )
      })
        return(
            <div>
            <hr />
            <div className="bounds">
            <div>
            {coursesList}  
            </div>          
              <div className="grid-33"><a className="course--module course--add--module" href="/course/create">
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


export default Courses;

