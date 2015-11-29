import React from 'react';

export default class Variable extends React.Component {

  render () {
    var {type, name, onDelete, onUpdate} = this.props;

    return (
      <div className={'variable variable-type-' + type.toLowerCase()}>
        <input
          className="variable-name"
          type="text"
          value={name}
          onChange={(e) => onUpdate({name: e.target.value})}/>
        <button
          className="close-btn"
          onClick={onDelete}/>
      </div>
    );
  }
}