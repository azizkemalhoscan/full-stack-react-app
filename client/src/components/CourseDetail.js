import React, { Component } from 'react';
// import UpdateCourse from './UpdateCourse';

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


    //   $2a$10$LdKDMrRd0tbgk2behb.E8urGI523sNNHFHKJjW6WqH/7Md44rDXiG
    //   $2a$10$LdKDMrRd0tbgk2behb.E8urGI523sNNHFHKJjW6WqH/7Md44rDXiG

      removeCourse() {
        const { context } = this.props;
        const username = context.authenticatedUser.emailAddress;
        const password = context.authenticatedUser.password;
        context.data.deleteCourse(this.props.match.params.id, username, password )

        // const { context } = this.props;
        // axios.delete(`http://localhost:5000/api/courses/${id}`, 
        //     {
        //         userReq :context.authenticatedUser,
        //         auth :{
        //             username: context.authenticatedUser.emailAddress, 
        //             password: context.authenticatedUser.password,
        //             }, 
        //         headers:{Authorization: "token"},
        //     }).then(response => {
        //     })
      }

    render(){
        const { context } = this.props;
        console.log(context.authenticatedUser.password)
        // style={{display:( context.authenticatedUser  ? ( this.state.courses.userId === context.authenticatedUser.id  ? '' : 'none' ) : 'none' )}}
        return(
            <div id="root">
                <div>
                <hr/>
                <div>
                    <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100"><span><a class="button"  href={`/courses/${this.state.courses.id}/update`} >Update Course</a><a class="button"  onClick={() => {this.removeCourse(this.props.match.params.id)}} href="/">Delete Course</a></span><a
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