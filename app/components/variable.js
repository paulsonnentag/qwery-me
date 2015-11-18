import React from 'react';


export const TYPE = {
  PERSON: 'PERSON',
  EVENT: 'EVENT',
  PLACE: 'PLACE',
  ANYTHING: 'ANYTHING'
};

export default class Variable extends React.Component {

  render () {
    var {type, name} = this.props;


    return (
      <div className="variable">
        <select>
          <option value={TYPE.PERSON}>Person</option>
          <option value={TYPE.EVENT}>Event</option>
          <option value={TYPE.PLACE}>Place</option>
          <option value={TYPE.ANYTHING}>Anything</option>
        </select>
        <input
          className="variable-name"
          type="text"
          value="value"/>
      </div>
    );
  }
}