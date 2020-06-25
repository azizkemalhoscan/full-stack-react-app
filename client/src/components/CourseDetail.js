import React, { Component } from 'react';


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


    render(){
        const { context } = this.props;
        // console.log(context.authenticatedUser);
        // console.log(this.state.courses);
        
        return(
            <div id="root">
                <div>
                <hr/>
                <div>
                    <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100"><span><a class="button" style={{display:( context.authenticatedUser  ? ( this.state.courses.userId === context.authenticatedUser.id  ? '' : 'none' ) : 'none' )}} href={`/courses/${this.state.courses.id}/update`} >Update Course</a><a class="button" style={{display:( context.authenticatedUser  ? ( this.state.courses.userId === context.authenticatedUser.id  ? '' : 'none' ) : 'none' )}} onClick={() => {this.removeCourse(this.props.match.params.id)}} href="/">Delete Course</a></span><a
                            className="button button-secondary" href="/">Return to List</a></div>
                    </div>
                    </div>
                    <div class="bounds course--detail">
                        <div>
                            <div className="grid-66">
                        <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">{this.state.courses.title}</h3>
                        <p>By Joe Smith</p>
                        </div>
                        <div className="course--description">
                        <p>{this.state.courses.description}</p>
                        </div>
                    </div>
                    <div className="grid-25 grid-right">
                        <div className="course--stats">
                        <ul className="course--stats--list">
                            <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <h3>{this.state.courses.estimatedTime}</h3>
                            </li>
                            <li className="course--stats--list--item">
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
// const renderButtons = context.authenticatedUser && context.authenticatedUser.id === this.state.courses.userId ?
// <div className="grid-100"><span><a class="button" href="courses/update">Update Course</a><a class="button" onClick={() => {this.removeCourse(this.props.match.params.id)}} href="/">Delete Course</a></span><a
// className="button button-secondary" href="/">Return to List</a></div>: 
//                         <div className="grid-100"><span><a class="button" href="courses/update">Update Course</a><a class="button" display="none" onClick={() => {this.removeCourse(this.props.match.params.id)}} href="/">Delete Course</a></span><a
//                         className="button button-secondary" href="/">Return to List</a></div>