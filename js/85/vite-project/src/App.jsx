import { Component } from 'react';
import Weather from './weather';
import Clock from './Clock';
import './App.css'

export default class App extends Component {
  state = {

  }

  render() {
    return (

      <div className='weatherApp'>
        <p>The weather</p>
        <Clock />
        <Weather />
      </div>


    )
  }

}


