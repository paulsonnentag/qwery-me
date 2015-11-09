import React from 'react';

const BACK_SPACE = 8;

export default class InputNode extends React.Component {

  componentDidMount () {
    if (this.props.focus) {
      this._input.focus();
    }
  }

  componentWillReceiveProps (props) {
    if (props.focus && this._input) {
      this._input.focus();
    }
  }

  submitHandler (e) {
    e.preventDefault();
    this.props.onChange(this._input.value);
  }

  keyDownHandler (e) {
    if (e.target.value === '' && e.keyCode === BACK_SPACE) {
      this.props.onDelete();
    }
  }

  render () {
    return (
      <form className="input-node" onSubmit={this.submitHandler.bind(this)}>
      <input type="text" ref={(el) => this._input = el} onKeyDown={this.keyDownHandler.bind(this)} />
      </form>
    );
  }
}
