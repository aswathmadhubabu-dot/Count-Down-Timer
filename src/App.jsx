
import React, { Component } from 'react';
import Clock from './clock'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            'deadline' :'November 17 2018',
            'newDeadline':''
        }
    }
    changeDeadline()
    {
        console.log(this.state.newDeadline)
        this.setState({'deadline':this.state.newDeadline});
    }
   
    render() {

        
    return (<div className="container text-center text-fluid">{this.state.deadline} <Clock deadline={this.state.deadline}/>

            <div className="container-fluid text-center col-md-12">
                <div className="col-md-12">  <input type="text" className="form-control" id="month" placeholder="NEW DATE &nbsp;&nbsp;&nbsp; Format :[Month Date Year]"onChange={event =>this.setState({newDeadline: event.target.value})} /></div>
                <button className="btn btn-info text-center well" onClick={() => this.changeDeadline()}>SUBMIT</button>


            </div></div>)
    }
}

export default App;

