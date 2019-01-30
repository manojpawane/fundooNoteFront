import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Card from '../CardView/Card'
import { getNotes} from '../../Database/Notes'
import jwt_decode from 'jwt-decode'
import { Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import EditCard from '../EditCard/EditCard';
import Dialog from '@material-ui/core/Dialog';

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
  }
  state = {
    spacing: '16',
  };

  handleClickOpen = (value, index) => {
    this.setState({ open: true });
    this.setState({valueOf:value})
    this.setState({index:index})
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

  onChange=(val, index)=>{
    let newList = this.state.list.slice();
    newList[index] = val;
    this.setState({list:newList})
  }
 

    render(){
        return(        
        <div style={{cardStyl}}>
           <Grid  container direction="row" justify="center" alignItems="center" spacing={8}>
           {this.state.list.map((value, index)=>(
           <div key={value._id}>
          
          {index % 3 === 0 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid  spacing={16} container direction="column"  onClick={() => this.handleClickOpen(value, index)}  className=""><Card value={value} index={index}/></Grid></Grid>
          :index % 3 === 1 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid  spacing={16} container direction="column" onClick={() => this.handleClickOpen(value, index)} className=""><Card value={value} index={index}/></Grid> </Grid>
          :index % 3 === 2 ? <Grid container direction="row" className={'flexGrow: 2'} item xs zeroMinWidth><Grid  spacing={16} container direction="column" onClick={() => this.handleClickOpen(value, index)}><Card value={value} index={index} /></Grid></Grid>
          :''}
          </div>
        ))}
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
        )
    }
}

export default withRouter(CardNote)