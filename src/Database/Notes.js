import axios from 'axios'

export const  getNotes = userId =>{
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

export const  addNotes =note =>{
    return axios.post('note/createNote',{
        title: note.title,
        content: note.content,
        noteType: note.noteType,
        isPinned:note.isPinned,
        userId:note.userId,
        color:note.color,
        label:note.label,
        photo:note.photo,
        reminder:note.reminder
    })
    .then(res =>{
        return res.data
    })
    .catch(err =>{
        console.log(err);
        
    })
}


export const deleteNote = note =>{
    return axios.delete('note/deleteNote/' +note.id)
    .then(
        res =>{
            return res.data     
        }
    )
    .catch(err =>{
        throw err;
    })
}