import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Card from '../CardView/Card'
import { getNotes} from '../../Database/Notes'
import jwt_decode from 'jwt-decode'
import { Grid } from '@material-ui/core';
import EditCard from '../EditCard/EditCard';
import Dialog from '@material-ui/core/Dialog';

class CardNote extends Component{
  constructor(){
    super()
    this.state = {
      list:[],
      valueOf:'',
      open:false
    }
  }
  state = {
    spacing: '16',
  };

  handleClickOpen = (value) => {
    this.setState({ open: true });
    this.setState({valueOf:value})
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);
    
    getNotes(decoded._id).then(res =>{
      if(res){
        console.log(res)
        this.setState({
          list:res
        })
      }
    })
  }
  

    render(){
        return(        
        <div>
           <Grid container direction="row" justify="center" alignItems="center" spacing={Number(8)}>
           {this.state.list.map((value, index)=>(
           <Grid  key={value._id}>
          
          {index % 3 === 0 ? <Grid  container direction="column" justify="center" alignItems="flex-start"><Grid onClick={() => this.handleClickOpen(value)} container direction="column" justify="center"><Card value={value}/></Grid></Grid>
          :index % 3 === 1 ? <Grid  container direction="column" justify="center" alignItems="center"><Grid onClick={() => this.handleClickOpen(value)} container direction="column"><Card value={value}/></Grid></Grid> 
          :index % 3 === 2 ? <Grid  container direction="column" justify="center" alignItems="flex-end"><Grid onClick={() => this.handleClickOpen(value)} container direction="column"><Card value={value}/></Grid></Grid>
          :''}
          </Grid>
        ))}
    </Grid>
    <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
            >
            <EditCard value={this.state.valueOf} handleClose={this.handleClose}/>
      </Dialog>
    </div>
        )
    }
}

export default withRouter(CardNote)