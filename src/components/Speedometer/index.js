// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerateSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed + 10}))
    }
  }

  onApplyBrakeSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-bg-container">
        <h1 className="speedometer-main-heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speedometer-heading">Speed is {speed}mph</h1>
        <p className="speedometer-description">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            className="button accelerate-button"
            type="button"
            onClick={this.onAccelerateSpeed}
          >
            Accelerate
          </button>
          <button
            className="button apply-break-button"
            type="button"
            onClick={this.onApplyBrakeSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
