import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { updateNotes } from '../../Database/Notes';
import jwt_decode from 'jwt-decode';

const cardStyle = {
    width:'598px',
     height:'auto',
   }

   const contentStyle = {
       width:'566px',
       height:'auto',       
       borderBottomColor: 'transparent',
       overflowX:'hidden'
   }

   const titleStyle = {
       height:'28px',
       width:'568px',
       postion:'fixed'
   }

class EditCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:this.props.value.title,
            content:this.props.value.content,
            noteType: this.props.value.noteType,
            _id:this.props.value._id,
            isPinned:this.props.value.isPinned,
            userId:'',
            color:this.props.value.color,
            label:this.props.value.label,
            open:this.props.open
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault()
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);

        const note = {
            title: this.state.title,
            content: this.state.content,
            noteType: this.state.noteType,
            _id:this.state._id,
            isPinned:this.state.isPinned,
            userId:decoded._id,
            color:this.state.color,
            label:this.state.label
        }

        updateNotes(note).then(res => {
         if(res){
             this.props.onChange(note, this.props.index);
         }
        })
        .catch(err => {
            console.log(err);
        })
        this.props.handleClose();
    }

      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      render() {              
        return (
            
           <div >
              <div style={cardStyle}>
              <DialogContent >
                      <InputBase
              value={this.state.title} 
              placeholder="Title"
              name = "title"
              style={titleStyle}
              variant = "h1"
              onChange={this.onChange}
              />

            <InputBase 
            style={contentStyle}
            value={this.state.content}
            name="content"
            multiline
            onChange={this.onChange}
            />
             </DialogContent>
          </div>
             
              <DialogActions>
                <Button type="submit" style={{postion:'fixed'}} onClick={this.onSubmit} color="primary">
                  Close
                </Button>
              </DialogActions>
          </div>
          
        );
      }}



export default withRouter(EditCard)