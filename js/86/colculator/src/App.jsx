import { Component } from 'react'

import './App.css'

export default class App extends Component {
  state = {
    current: '',
    total: 0,
    display: '',
    operator: null
  }
  handleClick = e => {
    this.setState({
      current: this.state.current + `${e.target.innerText}`,
      display: this.state.display + `${e.target.innerText}`
    })
  }
  handleOperator = e => {
    let num = Number(this.state.current);

    this.setState({
      total: this.state.total += num,
      operator: e.target.innerText,
      display: this.state.display + ` ${e.target.innerText} `,
      current: ''

    })
  }
  handleEqualsOperator = () => {
    let answer
    switch (this.state.operator) {
      case '+':
        answer = this.state.total + Number(this.state.current.trim());
        break;
      case '-':
        answer = this.state.total - Number(this.state.current.trim());
        break;
      case '*':
        answer = this.state.total * Number(this.state.current.trim());
        break;
      case '/':
        answer = this.state.total / Number(this.state.current.trim());
    }
    this.setState({
      current: answer.toString(),
      total: 0,
      display: answer
    })
  }
  handleClearClick = () => {
    this.setState({
      current: '',
      total: 0,
      display: '',
    })
  }
  handleSwitchBtn = () => {
    let str;
    let num = Number(this.state.current)
    num >= 0 ? str = '-' + num : str = Math.abs(num).toString();
    this.setState({
      current: str,
      display: str
    })


  }
  render() {
    console.log(this.state);
    return (
      <>
        <div className='colcContainer'>
          <textarea type="text" value={this.state.display} readOnly></textarea>
          <div className='div'>

            <button onClick={this.handleClearClick}>C</button>
            <button >()</button>
            <button >%</button>
            <button onClick={this.handleOperator}>/</button>

            <button onClick={this.handleClick} >7</button>
            <button onClick={this.handleClick} >8</button>
            <button onClick={this.handleClick} >9</button>
            <button onClick={this.handleOperator}>*</button>

            <button onClick={this.handleClick}>4</button>
            <button onClick={this.handleClick}>5</button>
            <button onClick={this.handleClick}>6</button>
            <button onClick={this.handleOperator}>-</button>

            <button onClick={this.handleClick}>1</button>
            <button onClick={this.handleClick}>2</button>
            <button onClick={this.handleClick}>3</button>
            <button onClick={this.handleOperator}>+</button>

            <button onClick={this.handleSwitchBtn}>+/-</button>
            <button onClick={this.handleClick}>0</button>
            <button onClick={this.handleClick}>.</button>
            <button onClick={this.handleEqualsOperator} id="equals">=</button>
          </div>
        </div>

      </>
    )
  }
}