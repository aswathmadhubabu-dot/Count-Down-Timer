
import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log(this.props.deadline);

    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }
    getTimeUntil(deadline) {

        const result = Date.parse(deadline) - Date.parse(new Date());
        console.log(result);
        const seconds = Math.floor(result / (1000) % 60);
        const minutes = Math.floor(result / (1000 * 60) % 60);
        const hours = Math.floor(result / (1000 * 60 * 60) % 24);
        const days = Math.floor(result / (1000 * 60 * 60 * 24));
        console.log(seconds + '*' + minutes + '*' + hours + '*' + days);
        this.setState({ days, hours, minutes, seconds });
    }
    render() {
        // this.getTimeUntil(this.props.deadline);
        return (

            <div className="col-md-12 container-fluid text-center">
                <div className="col-md-3 text-fluid" id="clockDays">{this.state.days}Days</div>
                <div className="col-md-3 text-fluid" id="clockHours">{this.state.hours}Hours</div>
                <div className="col-md-3 text-fluid" id="clockMinutes">{this.state.minutes}Minutes</div>
                <div className="col-md-3 text-fluid" id="clockSeconds">{this.state.seconds}Seconds</div>
            </div>
        )
    }
}

export default Clock;