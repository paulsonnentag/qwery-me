import React from 'react';

export const TYPE = {
  PERSON: 'PERSON',
  EVENT: 'EVENT',
  PLACE: 'PLACE',
  ANYTHING: 'ANYTHING'
};

export default class Variable extends React.Component {

  render () {
    var {type, name, onDelete, onUpdate} = this.props;

    return (
      <div className="variable">
        <select
          className="variable-type"
          value={type}
          onChange={(e) => onUpdate({type: e.target.value})}>
          <option value={TYPE.PERSON}>Person</option>
          <option value={TYPE.EVENT}>Event</option>
          <option value={TYPE.PLACE}>Place</option>
          <option value={TYPE.ANYTHING}>Anything</option>
        </select>
        <input
          className="variable-name"
          type="text"
          value={name}
          onChange={(e) => onUpdate({name: e.target.value})}/>
        <button
          className="variable-delete-btn"
          onClick={onDelete}>
          delete
        </button>
      </div>
    );
  }
}