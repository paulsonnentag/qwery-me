import React from 'react';

// Toggle
// switch between two children, child gets toggle function passed down
export default class Toggle extends React.Component {
  constructor () {
    super();
    this.state = {toggled: false};
  }

  toggle () {
    console.log('toggle');
    this.setState({toggled: !this.state.toggled});
  }

  componentDidMount () {
    this.setState({toggled: false || this.props.initial});
  }

  render () {
    var {children} = this.props;
    var {toggled} = this.state;
    var child;

    if (children.length !== 2) {
      throw new Error (`Toggle expected 2 children, instead got ${children.length}`);
    }

    child = toggled ? children[1] : children[0];

    return React.cloneElement(child, {toggle: this.toggle.bind(this)});
  }
}