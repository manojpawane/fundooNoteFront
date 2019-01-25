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

export const  updateNotes =note =>{
    console.log('test: '+note._id);
    return axios.post('note/updateNote',{
        title: note.title,
        content: note.content,
        noteType: note.noteType,
        _id:note._id,
        isPinned:note.isPinned,
        userId:note.userId,
        color:note.color,
        label:note.label
    })
    .then(res =>{
        return res.data
    })
    .catch(err =>{
        console.log(err);
        
    })
}