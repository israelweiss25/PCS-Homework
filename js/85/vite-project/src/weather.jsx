import { Component } from "react";
import './weather.css';
export default class Weather extends Component {
    state = {
        weather: 'The weather'
    }
    async componentDidMount() {
        try {
            const response = await fetch('https://weather.googleapis.com/v1/currentConditions:lookup?key=&location.latitude=41.4220&location.longitude=73.0841&unitsSystem=IMPERIAL');
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }
            const weather = await response.json();
            // const img = await weather.weatherCondition?.iconBaseUri
            this.setState({
                weather
            })
            console.log(weather);
            console.log(this.state);

        } catch (e) {
            console.error(e);
        }
    }
    render() {
        console.log('renedred');
        return (
            <>
                <div className="text">
                    <span id="degrees">{`${this.state.weather.temperature?.degrees} `}</span>
                    {`${this.state.weather.temperature?.unit} `}

                </div >
                <div className="text">
                    {`${this.state.weather.weatherCondition?.description.text}`}
                </div>
                <img src={`${this.state.weather.weatherCondition?.iconBaseUri}.png`} />
            </>
        );
    }
}