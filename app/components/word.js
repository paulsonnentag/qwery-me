import React from 'react';

export const SUBJECT = 'subject';
export const PREDICATE = 'predicate';
export const OBJECT = 'object';

export default class Word extends React.Component {

  changeHandler (e) {
    this.props.onChange({value: e.target.value});
  }

  render () {
    var {value} = this.props;

    return (
      <input
        type="text"
        value={value}
        onChange={this.changeHandler.bind(this)}/>
    );
  }
}
