import React,{Component} from 'react'
import Header from '../Header/Header';
// import Header from '../src/components/Header/Header'
class Dashboard extends Component{
    render(){
        return(
            <div>
                {localStorage.usertoken && <Header/> }
                <div>Hello Welcome to Dashboard</div>
                </div>
            
        )
    }
}

export default Dashboard