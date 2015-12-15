import React from 'react';

export default class Variable extends React.Component {

  render () {
    var {type, name, onDelete, onUpdate} = this.props;

    return (
      <div className={'token ' + type.toLowerCase()}>
        <div className={'small icon ' + type.toLowerCase()}/>
        <input
          type="text"
          value={name}
          onChange={(e) => onUpdate({name: e.target.value})}/>
        <button
          className="small close icon"
          onClick={onDelete}/>
      </div>
    );
  }
}