import axios from 'axios';

export const register = () => {
    return axios
    .post('/users', {
        
    })

};

export const  login = (user) => {
    return axios
    .post('/users', {
        email: user.email,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
    })
    .catch(err => {
        console.log(err)
    })
};