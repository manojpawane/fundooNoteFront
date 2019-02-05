import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import jwt_decode from 'jwt-decode';

const styles = {
    card: {
        minWidth: 50,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};



class CardNote extends Component{
    constructor(props){
        super(props)
        this.state ={
            title:this.props.value.title,
            content:this.props.value.content,
            noteType: this.props.value.noteType,
            _id:this.props.value._id,
            isPinned:this.props.value.isPinned,
            userId:'',
            color:this.props.value.color,
            label:this.props.value.label,
            photo:this.props.value.photo,
            reminder:this.props.value.reminder,
            viewPx:this.props.viewVal
        }
    }

   onSubmitPinned =async (e)=>{
        e.preventDefault()
        const token = localStorage.usertoken
        const decoded =await jwt_decode(token);
        if(this.state.isPinned === true){
           await this.setState({isPinned:false})
        }
        else{
          await this.setState({isPinned:true})
          await this.setState({noteType:'isNote'})
        }

        const note = {
            title: this.state.title,
            content: this.state.content,
            noteType: this.state.noteType,
            _id:this.state._id,
            isPinned:this.state.isPinned,
            userId:decoded._id,
            color:this.state.color,
            label:this.state.label,
            photo:this.state.photo,
            reminder:this.state.reminder
        }

        this.props.onUpdateSubmit(note, this.props.index);
    }

    onSubmitNoteType =async (e, isType)=>{
        e.preventDefault();
        
        const token = localStorage.usertoken
        const decoded =await jwt_decode(token);
        if(isType === 'archive'){
           await this.setState({noteType:'isArchive'})
           await this.setState({isPinned:false})
        }
        else if(isType === 'trash'){
          await this.setState({noteType:'isTrashed'})
          await this.setState({isPinned:false})
        }
        else if(isType === 'unArchive' || isType === 'restore'){
            await this.setState({noteType:'isNote'})
        }

        const note = {
            title: this.state.title,
            content: this.state.content,
            noteType: this.state.noteType,
            _id:this.state._id,
            isPinned:this.state.isPinned,
            userId:decoded._id,
            color:this.state.color,
            label:this.state.label,
            photo:this.state.photo,
            reminder:this.state.reminder
        }

        this.props.onUpdateSubmit(note, this.props.index);
    }

    componentDidUpdate(prevProps){
        if(prevProps!==this.props){
            this.setState({
                title:this.props.value.title,
                content:this.props.value.content,
                viewPx:this.props.viewVal
               })
        }
    }
    render(){
        return(
            <div>
                <Card style={{width:this.state.viewPx}}>
    
        <CardContent>
        <div className="d-flex justify-content-between">
            <div className="p-2 col-example text-left"><h5 onClick={() => this.props.handleClickOpen(this.props.value, this.props.index)}>{this.state.title}</h5></div>
            {this.props.value.noteType === 'isNote' ? <div >
            { this.props.value.isPinned === false ? <div style={{cursor:'pointer'}} className="p-2 col-example text-left"><img alt="pinned" onClick={this.onSubmitPinned} src={require('../../Assests/images/pinned.svg')}  /></div>:
            <div style={{cursor:'pointer'}} className="p-2 col-example text-left"><img alt="unpinned" onClick={this.onSubmitPinned} src={require('../../Assests/images/unpinned.svg')}  /></div>}
        </div> : ''}
        </div>
          <Typography component="p" onClick={() => this.props.handleClickOpen(this.props.value, this.props.index)}>
          {this.state.content}
          </Typography>
        </CardContent>


      <div className="d-flex flex-row">
          
          {this.props.value.noteType === 'isArchive' ? <div className="p-2"> <img alt="unArchive" onClick ={(event)=> {this.onSubmitNoteType(event,'unArchive')}} src={require('../../Assests/images/unarchive.svg')}  />
          </div>
          : this.props.value.noteType !== 'isTrashed' ? <div className="p-2"> <img alt="archive" onClick ={(event)=> {this.onSubmitNoteType(event,'archive')}} src={require('../../Assests/images/archive.svg')}  />
          </div>
          : ''}
          <div className="p-2">
          {this.props.value.noteType !== 'isTrashed' ? <img alt="color" src={require ('../../Assests/images/color.svg')}/> : ''}
          </div>
          {this.props.value.noteType === 'isTrashed' ? <div className="p-2"> <img alt="deleteForever" onClick={()=>this.props.deleteNoteById(this.props.value, this.props.index)} src={require('../../Assests/images/deleteForever.svg')}  />
          </div>
          :<div className="p-2"> <DeleteOutlinedIcon onClick ={(event) => {this.onSubmitNoteType(event,'trash')}} /></div>  }
                    {this.props.value.noteType === 'isTrashed' ? <div className="p-2"> <img alt="restoreFromTrash" onClick ={(event) => {this.onSubmitNoteType(event,'restore')}} src={require('../../Assests/images/restoreFromTrash.svg')}  /></div>
          : ''  }
      </div>
         </Card>
            </div>
        )
    }
}


export default withRouter((withStyles(styles)(CardNote)))