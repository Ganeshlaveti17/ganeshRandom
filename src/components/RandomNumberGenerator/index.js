// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: '0'}

  onClickbutton = () => {
    this.setState(prevState => ({
      count: parseInt(Math.random(0, 1) * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="descriptios">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onClickbutton}>
            Generate
          </button>
          <p className="random-num">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
