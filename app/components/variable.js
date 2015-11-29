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
        <div className="row">
          <div className="variable-type">{type}</div>
          <button
            className="variable-delete-btn"
            onClick={onDelete}/>
        </div>
        <input
          className="variable-name"
          type="text"
          value={name}
          onChange={(e) => onUpdate({name: e.target.value})}/>
      </div>
    );
  }
}