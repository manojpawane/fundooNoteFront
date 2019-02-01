import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Card from '../CardView/Card'
import { getNotes, deleteNote} from '../../Database/Notes'
import jwt_decode from 'jwt-decode'
import { Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import EditCard from '../EditCard/EditCard';
import Dialog from '@material-ui/core/Dialog';
import AddNote from '../CardView/AddNote'

const theme = createMuiTheme({
  overrides: {
    MuiDialogContent : {
      root: {
      overflowX: 'hidden'
    }
  }
  },
  typography: {
    useNextVariants: true,
  }
})
const cardStyl = {
  maxWidth:'213px',
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: 'auto'
}
class CardNote extends Component{
  
  constructor(){
    super()
    this.state = {
      list:[],
      valueOf:'',
      index:'',
      open:false,
      maxWidth:'xl'
        }
    this.onChange = this.onChange.bind(this)
    this.deleteNoteById = this.deleteNoteById.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
  }
  state = {
    spacing: '16',
  };



  handleClickOpen = (value, index) => {
    this.setState({ open: true });
    this.setState({valueOf:value})
    this.setState({index:index})
  };

  deleteNoteById = (value, index) =>{
      const note = {
        id:value._id
      }
      console.log(this.state.list);
          deleteNote(note).then(res =>{
            if(res){
              this.setState(prevState =>({
                list:prevState.list.filter(value => value !== this.state.list[index])
              }))
            }
            console.log(this.state.list);
            
          })
          .catch(err =>{
            console.log(err);
          })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);
    
    getNotes(decoded._id).then(res =>{
      if(res){
        this.setState({
          list:res
        })
      }
      console.log(this.state.list)
    })
  }

  onChange=(val, index)=>{
    let newList = this.state.list.slice();
    newList[index] = val;
    this.setState({list:newList})
    console.log('tested')
  }
 
  handleAddList = (newItem) =>{
    let newList = this.state.list
    newList.push(newItem);
    this.setState({list:newList})
  }

    render(){
        return(        
          <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <AddNote  handleAddList = {this.handleAddList}/>
            </div>
        <div style={{cardStyl}}>
           <Grid  container direction="row" justify="center" alignItems="center">
           {this.state.list.map((value, index)=>(
             
           <div key={value._id}>
          {value.isPinned === true  && value.noteType === "isNote" ? <div>
            <p>PINNED</p>
          {index % 3 === 0 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid   container direction="column" className=""><Card handleClickOpen = {this.handleClickOpen} value={value} index={index} deleteNoteById = {this.deleteNoteById}/></Grid></Grid>
          :index % 3 === 1 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid   container direction="column"  className=""><Card handleClickOpen = {this.handleClickOpen} value={value} index={index} deleteNoteById = {this.deleteNoteById}/></Grid> </Grid>
          :index % 3 === 2 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid   container direction="column"><Card handleClickOpen ={this.handleClickOpen} value={value} index={index} deleteNoteById = {this.deleteNoteById}/></Grid></Grid>
          :''}
          </div> : ''}

          {value.isPinned === false  && value.noteType === 'isNote' ? <div>
            <p>OTHERS</p>
          {index % 3 === 0 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid   container direction="column" className=""><Card handleClickOpen = {this.handleClickOpen} value={value} index={index} deleteNoteById = {this.deleteNoteById}/></Grid></Grid>
          :index % 3 === 1 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid   container direction="column"  className=""><Card handleClickOpen = {this.handleClickOpen} value={value} index={index} deleteNoteById = {this.deleteNoteById}/></Grid> </Grid>
          :index % 3 === 2 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid   container direction="column"><Card handleClickOpen ={this.handleClickOpen} value={value} index={index} deleteNoteById = {this.deleteNoteById}/></Grid></Grid>
          :''}
          </div> : ''}
          </div>
        )
        
        )}
    </Grid>

    <MuiThemeProvider theme={theme}>
    <Dialog
        open={this.state.open}
        maxWidth={this.state.maxWidth}
        onClose={this.handleClose}
        aria-labelledby="max-width-dialog-title"
            >
            <EditCard value={this.state.valueOf} index={this.state.index} handleClose={this.handleClose} onChange = {this.onChange}/>
      </Dialog>
      </MuiThemeProvider>
    </div>
    </div>
        )
    }
}

export default withRouter(CardNote) 