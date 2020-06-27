import React, { Component } from 'react';
import axios from 'axios';

class UpdateCourse extends Component {
   
    state = {
        course: [],
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        userId: this.props.context.authenticatedUser.id,
        
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

    handleSubmit(e) {
        let { title, description, estimatedTime, materialsNeeded, userId } = this.state;
        axios.put(`http://localhost:5000/api/courses/${this.props.match.params.id}`, 
        { title, 
          description,
          estimatedTime, 
          materialsNeeded,
          userId,
          withCredentials: true,
          auth: {
            username: 'joe@smith.com',
            password: 'joepassword'
          } 
        }).then(response => {
        return console.log(response);
      
      })
    }


    render(){
      // const { context } = this.props;
      // console.log(this.props.match.params.id);
      // console.log(this.state.course.id);
        return(
            <div id="root">
            <div>
              <hr></hr>
              <div class="bounds course--detail">
                <h1>Update Course</h1>
                <div>
                  <form  onSubmit={(e) => {this.handleSubmit(e)}}>
                    <div class="grid-66">
                      <div class="course--header">
                        <h4 class="course--label">Course</h4>
                        <div><input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..."
                           onChange={(event) => {this.handleChange(event)}} value={this.state.title}></input></div>
                        <p>BY USERS NAME!!!! CHANGE THIS</p>
                      </div>
                      <div class="course--description">
                        <div><textarea id="description" name="description" class="" placeholder="Course description..." onChange={(event) => {this.handleChange(event)}} value={this.state.description}></textarea></div>
                      </div>
                    </div>
                    <div class="grid-25 grid-right">
                      <div class="course--stats">
                        <ul class="course--stats--list">
                          <li class="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div><input id="estimatedTime" name="estimatedTime" type="text" class="course--time--input"
                                placeholder="Hours" onChange={(event) => {this.handleChange(event)}} value={this.state.estimatedTime}></input></div>
                          </li>
                          <li class="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div><textarea id="materialsNeeded" name="materialsNeeded" class="" placeholder="List materials..." onChange={(event) => {this.handleChange(event)}} value={this.state.materialsNeeded}>
        </textarea></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid-100 pad-bottom"><button class="button" type="submit">Update Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='course-detail.html';">Cancel</button></div>
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


