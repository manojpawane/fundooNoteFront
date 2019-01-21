import axios from 'axios'
import { executionAsyncId } from 'async_hooks';

export const  getNotes = user =>{
    return axios.get('note/getNote/' + user.userId)
    .then(res =>{
        return res.data
    })
    .catch(err =>{
        throw err
    })
}