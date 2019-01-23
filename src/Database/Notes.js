import axios from 'axios'

export const  getNotes = userId =>{
    console.log('test'+userId);
    
    return axios.get('note/getNote/' + userId)
    .then(res =>{
        return res.data
    })
    .catch(err =>{
        throw err
    })
}