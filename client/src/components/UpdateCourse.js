import React, { Component } from 'react';

class UpdateCourse extends Component {
   
    state = {
        course: [],
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        userId: this.props.context.authenticatedUser.id,
        errors: [],
        
      }

      componentDidMount() {
        fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ course: data });
        })
        .catch(error => {
          console.log('error getching' + error);
        });
      };


    handleChange(event){
      // event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      });
      event.preventDefault();
    }

// Update a created course. This is similar to createing.

    handleSubmit(e) {
      e.preventDefault();
        const { context } = this.props;
        const { title, description, estimatedTime, materialsNeeded, userId } = this.state;
        const updatedCourse = {
          title,
          description,
          estimatedTime,
          materialsNeeded,
          userId,
        }

        const emailAddress = context.authenticatedUser.emailAddress;
        const password = context.authenticatedUser.password;

        context.data.updateCourses(this.props.match.params.id, updatedCourse, emailAddress, password )
        .then(errors => {
          if(errors.length) {
            this.setState({ errors: errors });
          } else {
            this.props.history.push('/');
            console.log(`${title} is successfully updated!`)
          }
        }).catch( err => {
          console.log(err);
          this.props.history.push('/');
        });
      
      }


    render(){

      console.log(this.state.course)

// Looped over error mesages and set them to a variable to be rendered.

      const errorMessages = this.state.errors.map(eacherr => {
        return(
          <li>{eacherr}</li>
        )
      });
      const { context } = this.props;
      const validationErrors = errorMessages.length > 0 ? "Validation errors" : null;

        return(
            <div id="root">
            <div>
              <hr></hr>
              <div className="bounds course--detail">
                <h1>Update Course</h1>
                <div>
                  <div>
                    <div>
                      <h2 className="validation--errors--label">{validationErrors}</h2>
                      <div className="validation-errors">
                        <ul>
                          {errorMessages}
                        </ul>
                      </div>
                      </div> 
                    </div>
                  <form  onSubmit={(e) => {this.handleSubmit(e)}}>
                    <div className="grid-66">
                      <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                           onChange={(event) => {this.handleChange(event)}} value={this.state.title}></input></div>
                        <p>by {context.authenticatedUser.firstName} {context.authenticatedUser.lastName}</p>
                      </div>
                      <div className="course--description">
                        <div><textarea id="description" name="description" className="" placeholder="Course description..." onChange={(event) => {this.handleChange(event)}} value={this.state.description}></textarea></div>
                      </div>
                    </div>
                    <div className="grid-25 grid-right">
                      <div className="course--stats">
                        <ul className="course--stats--list">
                          <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                                placeholder="Hours" onChange={(event) => {this.handleChange(event)}} value={this.state.estimatedTime}></input></div>
                          </li>
                          <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." onChange={(event) => {this.handleChange(event)}} value={this.state.materialsNeeded}>
        </textarea></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid-100 pad-bottom"><button className="button" type="submit">Update Course</button><a className="button button-secondary"  href={`/courses/${this.state.course.id}`}>Cancel</a></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


export default UpdateCourse;


      // componentDidMount() {
      //   fetch(`http://localhost:5000/api/courses`)
      //   .then(res => res.json())
      //   .then((data) => {
      //     this.setState({ courses: data });
      //   })
      //   .catch(error => {
      //     console.log('error getching' + error);
      //   });
      // };

// I am trying this with Axios!.
//     handleSubmit(e) {
//       // POST request using fetch with error handling
//       const { title, description, estimatedTime, materialsNeeded} = this.state;
//       const { context } = this.props;
//       // const course = {
//       //   title,
//       //   description,
//       //   estimatedTime,
//       //   materialsNeeded,
//       //   // userId,
//       // };

//       context.data.updateCourses(this.state.course)
//       .then(errors => {
//         if(errors.length) {
//           this.setState({ errors });
//         } else {
//           console.log(`${title} is successfully created!`)
//         }
//       }).catch( err => {
//         console.log(err);
//         this.props.history.push('/');
//       });
//       e.preventDefault();
// }

      // axios({
      //   method: 'put',
      //   url: `http://localhost:5000/api/courses/${this.props.match.params.id}`,
      //   data: {
      //     title: this.state.title,

      //   }
      // })



//  UPDATE COURSE MARKUP


