import React, { Component } from 'react';
import Header from './Header';


class CourseDetail extends Component {

        state = {
            courses: []
        };

    componentDidMount() {
        fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ courses: data });
        })
        .catch(error => {
          console.log('error getching' + error);
        });
      };


    // Need Authentication here.
    removeCourse(item) {
        fetch(`http://localhost:5000/api/courses/` + item, {
          method: 'delete'
        })
        .then(response => response.json())
        .then((updatedData) => {
            this.setState({ courses: updatedData });
          });
      }

    //   removeCourse(removedId){
    //     const requestMethod = {
    //         method: 'DELETE'
    //     };
    //     fetch(`http://localhost:5000/api/courses/` + removedId +requestMethod)
    //     .then(res => res.json())
    //     .then(json => {
    //         return json;
    //     })
    //   };

    render(){

        return(
            <div id="root">
                <div>
                <Header />
                <hr/>
                <div>
                    <div class="actions--bar">
                    <div class="bounds">
                        <div class="grid-100"><span><a class="button" href="courses/update">Update Course</a><a class="button" onClick={() => {this.removeCourse(this.props.match.params.id)}} href="#">Delete Course</a></span><a
                            class="button button-secondary" href="/">Return to List</a></div>
                    </div>
                    </div>
                    <div class="bounds course--detail">
                        <div>
                            <div class="grid-66">
                        <div class="course--header">
                        <h4 class="course--label">Course</h4>
                        <h3 class="course--title">{this.state.courses.title}</h3>
                        <p>By Joe Smith</p>
                        </div>
                        <div class="course--description">
                        <p>{this.state.courses.description}</p>
                        </div>
                    </div>
                    <div class="grid-25 grid-right">
                        <div class="course--stats">
                        <ul class="course--stats--list">
                            <li class="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <h3>{this.state.courses.estimatedTime}</h3>
                            </li>
                            <li class="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <ul>
                                <li>{this.state.courses.materialsNeeded}</li>
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
                    </div>
                </div>
                </div>
            </div>   
        )
    }
}






export default CourseDetail;

// Materials Needed part should be updated it is not like what is intented
