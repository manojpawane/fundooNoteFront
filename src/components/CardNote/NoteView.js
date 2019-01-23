import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Card from '../CardView/Card'
import { getNotes} from '../../Database/Notes'
import jwt_decode from 'jwt-decode'

class CardNote extends Component{
  constructor(){
    super()
    this.state = {
      list:[]
    }
  }
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
                <Card/>
           
             {/* <List>
            {['Notes', 'Reminders'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          </div>
        )
    }
}


export default withRouter(CardNote)