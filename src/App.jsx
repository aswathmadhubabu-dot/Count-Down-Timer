/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-21 15:21:45 
 * @Last Modified by: Aswath MadhuBabu
 * @Last Modified time: 2017-06-21 16:13:17
 */

import React, { Component } from 'react';
import Clock from './clock'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            'deadline' :'December 25 2017',
            'newDeadline':''
        }
    }
    changeDeadline()
    {
        console.log(this.state.newDeadline)
        this.setState({'deadline':this.state.newDeadline});
    }
   
    render() {

        
    return (<div className="container text-center">  Countdown to {this.state.deadline} <Clock deadline={this.state.deadline}/>

            <div className="container-fluid text-center col-md-12">
                <div className="col-md-12">  <input type="text" className="form-control view" id="month" placeholder="NEW DATE &nbsp;&nbsp;&nbsp; Format :[Month Date Year]"onChange={event =>this.setState({newDeadline: event.target.value})} /></div>
                <button className="btn btn-info text-center well" onClick={() => this.changeDeadline()}>SUBMIT</button>


            </div></div>)
    }
}

export default App;

