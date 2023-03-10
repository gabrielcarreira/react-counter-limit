import { Component } from 'react'

class TextCounter extends Component {
  static defaultProps = {
    limit: 15
  }

  constructor(props) {
    super(props)

    this.state = {
      totalChars: 0,
      text: '',
      limitColor: 'white'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const element = event.target,
      text = element.value

    if (text.length <= this.props.limit) {
      this.setState({
        totalChars: text.length,
        text,
        limitColor: 'white'
      })
    } else {
      this.setState({
        totalChars: this.props.limit - text.length,
        text,
        limitColor: 'red'
      })

    }
  }

  render() {
    const { state, props } = this

    return (
      <div>
        <h1>React Counter</h1>
        <textarea onChange={this.handleChange} value={state.text} />
        <div className="counter" style={{color: state.limitColor}}>
          <strong>Total:</strong> {state.totalChars} / {props.limit}
        </div>
      </div>
    )
  }
}

export default TextCounter
