import { Component } from 'react';


// This class is for api requests. We are fetching data from our database with the help of following format.


class Data extends Component {

    state = {

    }

// The main format of our all requests.

    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null){
        const url = "http://localhost:5000/api" + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }
// This part is to send credentials in the header for authorization purposes.

        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }

        return fetch(url, options);
    }


    //  Getting a user 

    async getUser(emailAddress, password) {
        const response =  await this.api('/users', 'GET', null, true, { emailAddress, password});
        if (response.status === 200 ) {
            return response.json().then(data => data);
        } else if (response.status === 401) {
            return null;
        } else {
            throw new Error();
        }
    }

// Get a course

    async getCourse(id) {
        const response = await this.api(`/courses/${id}`, 'GET', null, false, null);
        if(response.status === 200) {
            return response.json().then(data => data);
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        } else {
            throw new Error();
        }
    }

// Create course

    async createUser(user) {
        const response = await this.api('/users', 'POST', user, false, null);
        if(response.status === 201) {
            return [];
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        } else {
            throw new Error();
        }
    }

    // Get all courses

    async getCourses() {
        const response = await this.api('/courses', 'GET', null, false, null);
        if(response.status === 200) {
            return response.json().then(data => data);
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        } else {
            throw new Error();
        }
    }

    // Delete a course

    async deleteCourse(id, emailAddress, password) {
        const response = await this.api(`/courses/${id}`, 'DELETE', null, true, { emailAddress, password });
        if(response.status === 204) {
            return [];
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        } else {
            throw new Error();
        }      
    }

    //  Create a course

    async createCourses(course, emailAddress, password) {
        const response = await this.api('/courses', 'POST', course, true, { emailAddress, password });
        if(response.status === 201) {
            return [];
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        } else {
            throw new Error();
        }
    }

    // Update a course

    async updateCourses(id, course, emailAddress, password){
        const response = await this.api(`/courses/${id}`, 'PUT', course, true, { emailAddress, password });
        if(response.status === 201) {
            return [];
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        } else {
            throw new Error();
        }       
    }
}

export default Data;