import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

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
    maxWidth:'213px'
}

const cardTitle = {
    paddingLeft:'15px',
    paddingTop:'8px'
}

class CardNote extends Component{
    constructor(props){
        super(props)
        this.state ={
            title:this.props.value.title,
            content:this.props.value.content
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.value!==this.props.value){
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
                    <Typography variant="h5" style={cardTitle} component="h2" color="textSecondary" gutterBottom>
                        {this.state.title}
                    </Typography>
                    <CardContent>
                        <Typography component="p">
                        {this.state.content}
                            </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}


export default withRouter((withStyles(styles)(CardNote)))