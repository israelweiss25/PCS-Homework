import { Component } from 'react'
import {Temporal} from '@js-temporal/polyfill'

export default class  Time extends Component{
    state = {
        localTime : ''
    }
    componentDidMount(){
        setInterval(()=> {
        let time = Temporal.Now.instant().toZonedDateTimeISO("America/New_York").toPlainTime().round("second").toString();
            this.setState({
                localTime: time
            })
        }, 1000);
    }
    
    render(){

        return (
            <>
            <div>
                <p>Local time <span>{this.state.localTime}</span></p>
                
            </div>
            </>
        )
    }
}