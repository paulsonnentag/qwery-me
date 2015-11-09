import React from 'react';

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

  render () {
    return (
      <form className="input-node" onSubmit={this.submitHandler.bind(this)}>
      <input type="text" ref={(el) => this._input = el} />
      </form>
    );
  }
}
