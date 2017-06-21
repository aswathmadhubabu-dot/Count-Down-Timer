import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            days : 0,
            hours :0,
            minutes :0,
            seconds :0
        }
    }
    render(){
        return(
            <div className="col-md-12 container-fluid text-center text-fluid">
            <div className="col-md-3 text-fluid" id="clockDays">{this.state.days}Days</div>
            <div className="col-md-3 text-fluid" id="clockHours">{this.state.hours}Hours</div>
            <div className="col-md-3 text-fluid" id="clockMinutes">{this.state.minutes}Minutes</div>
            <div className="col-md-3 text-fluid" id="clockSeconds">{this.state.seconds}Seconds</div>
            </div>
        )
    }
}

export default Clock;