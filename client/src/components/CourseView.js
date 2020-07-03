import React from 'react';

const CourseView = (props) => {
    return(
        <div className="grid-33"><a className="course--module course--link" href={`courses/${props.identity}`} >
        <h4 className="course--label">Course</h4>
        <h3 className="course--title">{props.title}</h3>
        {/* <h3 className="course--title">{props.identity}</h3> */}
      </a>
    </div>    
    )
}

// This component is to format each course to be presented with the whole other courses in Courses.js

export default CourseView;