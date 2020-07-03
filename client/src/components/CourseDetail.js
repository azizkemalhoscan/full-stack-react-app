import React, { Component } from 'react';
// import UpdateCourse from './UpdateCourse';
import ReactMarkdown from 'react-markdown';
// import ReactMarkdownExample from './ReactMarkdown.js';


class CourseDetail extends Component {

        state = {
            courses: []
        };

    componentDidMount() {
        const { context } = this.props;
        context.data.getCourse(this.props.match.params.id).then(
            response => this.setState({
                courses: response
            }))
            .catch(error => {
                console.log('FAILLLLSSS error catching' + error);
                })
      };



    //   Delete a course by the help of data.js delete course method.
      removeCourse() {
        const { context } = this.props;
        const username = context.authenticatedUser.emailAddress;
        const password = context.authenticatedUser.password;
        context.data.deleteCourse(this.props.match.params.id, username, password )
      }

    render(){

        const { context } = this.props;
        const a = this.state.courses.User;

    
        // style={{display:( context.authenticatedUser  ? ( this.state.courses.userId === context.authenticatedUser.id  ? '' : 'none' ) : 'none' )}}
        return(
            <div id="root">
                <div>
                <hr/>
                <div>
                    <div className="actions--bar">
                    <div className="bounds">
                    {/* ternary operator to show or hide delete and update buttons if the course viewed is a course that is created by user! */}
                        <div className="grid-100"><span><a className="button" style={{display:( context.authenticatedUser  ? ( this.state.courses.userId === context.authenticatedUser.id  ? '' : 'none' ) : 'none' )}} href={`/courses/${this.state.courses.id}/update`} >Update Course</a><a className="button"  onClick={() => {this.removeCourse(this.props.match.params.id)}} style={{display:( context.authenticatedUser  ? ( this.state.courses.userId === context.authenticatedUser.id  ? '' : 'none' ) : 'none' )}} href="/">Delete Course</a></span><a
                            className="button button-secondary" href="/">Return to List</a></div>
                    </div>
                    </div>
                    <div className="bounds course--detail">
                        <div>
                            <div className="grid-66">
                        <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">{this.state.courses.title}</h3>
                        <p>By </p>
                        </div>
                        <div className="course--description">
                        <p><ReactMarkdown source={this.state.courses.description} /></p>
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
                                <ReactMarkdown source={this.state.courses.materialsNeeded} />                        
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
                             /* <li>1 x 2 common pine</li>
                                <li>1 x 4 common pine</li>
                                <li>1 x 10 common pine</li>
                                <li>1/4 inch thick lauan plywood</li>
                                <li>Finishing Nails</li>
                                <li>Sandpaper</li>
                                <li>Wood Glue</li>
                                <li>Wood Filler</li>
                                <li>Minwax Oil Based Polyurethane</li> */