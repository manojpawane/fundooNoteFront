import axios from 'axios'

/**
 * Ajax call for user registration
 * @param {*} newUser 
 */
export const register = newUser => {
    return axios
        .post('user/create', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
}

/**
 * Ajax call for user login
 * @param {*} user 
 */
export const login = user => {
    return axios
        .post('user/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * Ajax call for token verification
 * @param {*} verifyToken 
 */
export const Verify = verifyToken =>{
    return axios
    .post('http://localhost:3000/user/confirmation',{
        email:verifyToken.email,
        token:verifyToken.token
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

