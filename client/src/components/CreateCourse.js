import React, { Component } from 'react';
class CreateCourse extends Component {
    
  state = {
    title: "",
    description: "",
    estimatedTime: "",
    materialsNeeded: "",
    userId: this.props.context.authenticatedUser.id,
    errors: [],
  }

  handleChange(event){
    // event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
        // POST request using fetch with error handling
        const { title, description, estimatedTime, materialsNeeded, userId } = this.state;
        const { context } = this.props;
        const course = {
          title,
          description,
          estimatedTime,
          materialsNeeded,
          userId,
        };
    const password = this.props.context.authenticatedUser.password;
    const emailAddress = this.props.context.authenticatedUser.emailAddress;

        context.data.createCourses(course, emailAddress, password)
        .then(errors => {
          if(errors.length) {
            this.setState({ errors: errors });
          } else {
            this.props.history.push('/');
            console.log(`${title} is successfully created!`)
          }
        }).catch( err => {
          console.log(err);
          this.props.history.push('/');
        });
  }

    render(){
const errorMessages = this.state.errors.map(eacherr => {
  return(
    <li>{eacherr}</li>
  )
})
const validationErrors = errorMessages.length > 0 ? "Validation errors" : null;

        return(
            <div id="root">
            <div>
              <hr></hr>
              <div className="bounds course--detail">
                <h1>Create Course</h1>
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
                  <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <div className="grid-66">
                      <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                            value={this.state.title} onChange={(event) => {this.handleChange(event)}}></input></div>
                        <p>By Joe Smith</p>
                      </div>
                      <div className="course--description">
                        <div><textarea id="description" name="description" className="" value={this.state.description} onChange={(event) => {this.handleChange(event)}} placeholder="Course description..."></textarea></div>
                      </div>
                    </div>
                    <div className="grid-25 grid-right">
                      <div className="course--stats">
                        <ul className="course--stats--list">
                          <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                                placeholder="Hours" value={this.state.estimatedTime} onChange={(event) => {this.handleChange(event)}}></input></div>
                          </li>
                          <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div><textarea id="materialsNeeded" name="materialsNeeded" className="" value={this.state.materialsNeeded} onChange={(event) => {this.handleChange(event)}} placeholder="List materials..."></textarea></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><a className="button button-secondary"  href='/'>Cancel</a></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default CreateCourse;