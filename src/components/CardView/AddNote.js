import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { InputBase } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import jwt_decode from 'jwt-decode';
import { addNotes } from '../../Database/Notes';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const takeNote = {
    height:'auto',
    width:'598px',
    border:'1px'
}

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class AddNote extends Component{
    constructor(){
        super()
        this.state = {
            title:'',
            content:'',
            color:'',
            isPinned:false,
            label:[],
            noteType:'isNote',
            photo:'',
            reminder:'',
            openNote:false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    openNoteForContent=()=>{
        this.setState({openNote:true})
    }

    closeNoteForContent = ()=>{
        this.setState({openNote:false, title:'', content:''})
    }

    onSubmit(e){
        if(this.state.title !== '' && this.state.content !== ''){
            const token = localStorage.usertoken
            const decoded = jwt_decode(token);
            e.preventDefault()
            const note = {
                title:this.state.title,
                content:this.state.content,
                noteType: this.state.noteType,
                isPinned:this.state.isPinned,
                userId:decoded._id,
                color:this.state.color,
                label:this.state.label,
                photo:this.state.photo,
                reminder:this.state.reminder
            }
    
            addNotes(note).then(res => {
                if(res){
                    this.props.handleAddList(res);
                }
               })
               .catch(err => {
                   console.log(err);
               })
               this.props.noteTypeToPrint();
        }
        
           this.closeNoteForContent();
    }
    
    render(){
        return(
            <div>

<div>
      <Paper style={takeNote}>
        <Typography variant="h5" component="h3">
        <InputBase
              value={this.state.title} 
              style={{width:'568px', height:'24px', padding:'10px 15px 10px 15px'}}
              placeholder="Title"
              name = "title"
              variant = "h1"
              multiline
              onClick ={this.openNoteForContent}
              onChange={this.onChange}
              />
        </Typography>
      { this.state.openNote ? true && <div>
        
           <InputBase 
            value={this.state.content}
            name="content"
            style={{width:'566px', height:'22px',padding:'12px 16px 12px 16px'}}
            placeholder="Take a note..."
            multiline
            onChange={this.onChange}
            />
          
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button  size="small" onClick={this.onSubmit}>Close</Button>
          </div>
        
        </div> : null}
      </Paper>

    </div>

            </div>
        )
    }
}

export default withRouter((withStyles(styles)(AddNote)))