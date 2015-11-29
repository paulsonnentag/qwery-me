import React from 'react';
import Toggle from '../containers/toggle';
import ToggleButton from './toggle-button';
import TypeSelect from './type-select';

export default class AddVariableButton extends React.Component {
  render () {
    return (
      <Toggle>
        <ToggleButton>New</ToggleButton>
        <TypeSelect></TypeSelect>
      </Toggle>
    );
  }
}