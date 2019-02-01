import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import CardActionArea from '@material-ui/core/CardActionArea';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


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

const cardStyle = {
    width:'213px'
}

class CardNote extends Component{
    constructor(props){
        super(props)
        this.state ={
            title:this.props.value.title,
            content:this.props.value.content,
            id:this.props.value._id
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.value!==this.props.value){
            console.log(prevProps);
            console.log(this.props);
            
            this.setState({
                title:this.props.value.title,
                content:this.props.value.content
            })
        }
    }
    render(){
        return(
            <div>
                <Card style={cardStyle}>
                    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" onClick={() => this.props.handleClickOpen(this.props.value, this.props.index)}>
          {this.state.title}
          </Typography>
          <Typography component="p" onClick={() => this.props.handleClickOpen(this.props.value, this.props.index)}>
          {this.state.content}

          </Typography>
        </CardContent>
      </CardActionArea>
      <div>
          {/* <DeleteOutlinedIcon /> */}
          <DeleteOutlinedIcon onClick={()=>this.props.deleteNoteById(this.props.value, this.props.index)}/>
      </div>
         </Card>
            </div>
        )
    }
}


export default withRouter((withStyles(styles)(CardNote)))