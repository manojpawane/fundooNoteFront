import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Card from '../CardView/Card'
import { getNotes} from '../../Database/Notes'
import jwt_decode from 'jwt-decode'
import { Grid } from '@material-ui/core';

class CardNote extends Component{
  constructor(){
    super()
    this.state = {
      list:[]
    }
  }
  state = {
    spacing: '16',
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
          // <div>
          //   <Grid  container direction="column" justify="space-evenly" alignItems="center" container spacing={8}>
          //     {this.state.list.map(value => (
          //   <Grid key={value._id} item xs>
          //     <Card value={value} />
          //   </Grid>
          // ))}
          //   </Grid>
          // </div>

          <div>
             {this.state.list.map((value, index) => (
  <ListItem button key={text}>
    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}            
          </div>
        )
    }
}

// {['Archive', 'Trash'].map((text, index) => (
//   <ListItem button key={text}>
//     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//     <ListItemText primary={text} />
//   </ListItem>
// ))}

export default withRouter(CardNote)