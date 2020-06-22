import axios from 'axios';

// export const register = () => {
//     return axios
//     .post('/users', {
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         password: password
//     })

// };

export const  login = (user) => {
    return axios
    .get('/users', {
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