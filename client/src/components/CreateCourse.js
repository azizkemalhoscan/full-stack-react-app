import React, { Component } from 'react';
import Header from './Header.js';
import axios from 'axios';

class CreateCourse extends Component {
  state = {
    title: "",
    description: "",
    estimatedTime: "",
    materialsNeeded: "",
    userId: null
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { title, description, estimatedTime, materialsNeeded } = this.state;
    axios
    .post('http://localhost:5000/courses', { 
      course: {
        title: title,
        description: description,
        estimatedTime: estimatedTime,
        materialsNeeded: materialsNeeded
      }
    })
    .then(response => console.log('response for course creation', response))
    .catch(err => console.log('error in createion!', err))
    event.preventDefault();
  }

    render(){
        return(
            <div id="root">
            <div>
            <Header />
              <hr></hr>
              <div class="bounds course--detail">
                <h1>Create Course</h1>
                <div>
                  <div>
                    <h2 class="validation--errors--label">Validation errors</h2>
                    <div class="validation-errors">
                      <ul>
                        <li>Please provide a value for "Title"</li>
                        <li>Please provide a value for "Description"</li>
                      </ul>
                    </div>
                  </div>
                  <form submit={(event) => {this.handleSubmit(event)}}>
                    <div class="grid-66">
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
                    <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><button className="button button-secondary"  href='/'>Cancel</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}



export default CreateCourse;