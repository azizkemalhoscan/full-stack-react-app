import React, { Component } from 'react';

class CourseList extends Component {

    state = {
        courseData: this.props.coursesToList,
    };



    
    render(){
        console.log(this.props.coursesToList);
        console.log(this.state.courseData);
        return(
            <div>
            <div className="header">
                <h1 className="header--logo">Courses</h1>
                <nav><a className="signup" href="sign-up.html">Sign Up</a><a class="signin" href="sign-in.html">Sign In</a></nav>
            </div>
            <hr />
            <div className="bounds">
            {this.props.coursesToList.map(course =>
                <div className="grid-33"><a className="course--module course--link" href="course-detail.html">
                  <h4 className="course--label">Course</h4>
                  <h3 className="course--title">{course.title}</h3>
                </a></div>            
            )}    
              <div className="grid-33"><a className="course--module course--add--module" href="create-course.html">
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


