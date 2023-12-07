import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  state = {count2: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count2: prevState.count - 1}))
  }

  render() {
    const {count} = this.state

    const {count2} = this.state

    return (
      <div className="fruits-container">
        <div className="fruits-card">
          <h1 className="main-heading">
            Bob ate <span className="count">{count}</span> mangoes{' '}
            <span className="count">{count2}</span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="mangos-image"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="bananas-image"
              alt="banana"
            />
            <div>
              <button onClick={this.onIncrement} className="btn-one">
                Eat Mango{' '}
              </button>
              <button onClick={this.onDecrement} className="btn-two">
                Eat Banana{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
