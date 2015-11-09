import React from 'react';
import InputNode from './input-node';

export default class Statement extends React.Component {

  constructor () {
    super();

    this.state = {
      item: null,
      property: null,
      value: null,
      focus: null
    };
  }

  changeHandler (part, value) {
    var state = {};
    state[part] = value;
    this.setState(state);
    this.focusNext(part);
  }

  focusNext (part) {
    switch (part) {
      case 'item':
	this.setState({focus: 'property'});
	break;

      case 'property':
	this.setState({focus: 'value'});
	break;
    }
  }

  deleteHandler (part) {
    var state = {focus: part};
    state[part] = null;
    this.setState(state);
  }

  focusHandler (part) {
    this.setState({focus: part});
  }

  render () {
    var {item, property, value, focus} = this.state;

    return (
      <div className="statement">

      <InputNode
      onChange={this.changeHandler.bind(this, 'item')}
      onDelete={() => 0}
      onFocus={this.focusHandler.bind(this, 'item')}
      focus={focus === 'item'}/>

      {item ?
	<InputNode
	onChange={this.changeHandler.bind(this, 'property')}
	onDelete={this.deleteHandler.bind(this, 'item')}
	onFocus={this.focusHandler.bind(this, 'property')}
	focus={focus === 'property'}/> : null}

      {property ?
	<InputNode
	onChange={this.changeHandler.bind(this, 'value')}
	onDelete={this.deleteHandler.bind(this, 'property')}
	onFocus={this.focusHandler.bind(this, 'value')}
	focus={focus === 'value'}/> : null}
      </div>
    );
  }
}
