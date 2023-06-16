import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onClickAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onApplyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="image"
          alt="speedometer"
        />
        <h1 className="speed">
          Speed is <span className="speed-value">{count}mph</span>
        </h1>
        <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            className="accelerate-btn button"
            onClick={this.onClickAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="apply-brake-btn button"
            onClick={this.onApplyBrake}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
