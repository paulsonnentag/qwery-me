import React from 'react';
import Toggle from '../containers/toggle';
import ToggleButton from './toggle-button';
import VariableTypeSelect from './variable-type-select';

export default class AddVariableButton extends React.Component {
  render () {
    return (
      <div className="add-variable-button">
        <Toggle>
          <ToggleButton>New</ToggleButton>
          <VariableTypeSelect></VariableTypeSelect>
        </Toggle>
      </div>
    );
  }
}