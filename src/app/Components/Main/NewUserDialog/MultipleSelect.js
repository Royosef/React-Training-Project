import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const MultipleSelectFormControl = styled(FormControl)`
{
  margin: 2em;
  min-width: 120px;
  max-width: 300px;
}`;

class MultipleSelect extends React.Component {
  render = () => {
    const {data, label, ...other} = this.props;

    return (
      <FormControl>
        <MultipleSelectFormControl required>
          <InputLabel htmlFor='select-multiple-chip'>{label}</InputLabel>
          <Select
            onChange={this.handelChange}
            multiple
            input={
              <Input
                id='select-multiple-chip'
              />
            }
            {...other}
          >
            {data.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </MultipleSelectFormControl>
      </FormControl>
    );
  }
}

export default MultipleSelect;