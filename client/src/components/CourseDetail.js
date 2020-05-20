import React, { Component } from 'react';
import Header from './Header';

class CourseDetail extends Component {
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
            <div id="root">
                <div>
                <Header />
                <hr/>
                <div>
                    <div class="actions--bar">
                    <div class="bounds">
                        <div class="grid-100"><span><a class="button" href="update-course.html">Update Course</a><a class="button" href="#">Delete Course</a></span><a
                            class="button button-secondary" href="index.html">Return to List</a></div>
                    </div>
                    </div>
                    <div class="bounds course--detail">
                        {this.state.courses.map(course => 
                        <div>
                            <div class="grid-66">
                        <div class="course--header">
                        <h4 class="course--label">Course</h4>
                        <h3 class="course--title">{course.title}</h3>
                        <p>By Joe Smith</p>
                        </div>
                        <div class="course--description">
                        <p>{course.description}</p>
                        </div>
                    </div>
                    <div class="grid-25 grid-right">
                        <div class="course--stats">
                        <ul class="course--stats--list">
                            <li class="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <h3>{course.estimatedTime}</h3>
                            </li>
                            <li class="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <ul>
                                <li>{course.materialsNeeded}</li>
                                {/* <li>1 x 2 common pine</li>
                                <li>1 x 4 common pine</li>
                                <li>1 x 10 common pine</li>
                                <li>1/4 inch thick lauan plywood</li>
                                <li>Finishing Nails</li>
                                <li>Sandpaper</li>
                                <li>Wood Glue</li>
                                <li>Wood Filler</li>
                                <li>Minwax Oil Based Polyurethane</li> */}
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                        )}
                    </div>
                </div>
                </div>
            </div>   
        )
    }
}






export default CourseDetail;

// Materials Needed part should be updated it is not like what is intented
