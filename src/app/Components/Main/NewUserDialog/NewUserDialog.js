import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import uuidv1 from 'uuid/v1';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import OptionalFruits from '../../../Assets/Fruits.json';
import MultipleSelect from './MultipleSelect';

const ContainerForm = styled.form`
{
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}`;

class NewUserForm extends React.Component {
  initState = {
    name: '',
    age: '',
    fruits: [],
    about: ''
  };

  state = this.initState;

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleConfirm = e => {
    e.preventDefault();

    const {onConfirm} = this.props;
    const {age, name, fruits, about} = this.state;
    const newUser = {
      guid: uuidv1(),
      age,
      name,
      about,
      favoriteFruit: fruits
    };

    onConfirm(newUser);
    this.setState(this.initState);
  };

  handelClose = () => {
    const {onClose} = this.props;

    this.setState(this.initState);
    onClose();
  }

  render = () => {
    const {name, age, fruits, about} = this.state;
    const {open} = this.props;

    return (
      <Dialog
        open={open}
        aria-labelledby='form-dialog-title'
        scroll='body'
        maxWidth='xs'
      >
        <ContainerForm
          autoComplete='off'
          onSubmit={this.handleConfirm}
        >
          <DialogTitle id='form-dialog-title'>{'Create User'}</DialogTitle>
          <TextField
            required
            label='Name'
            value={name}
            onChange={this.handleChange('name')}
            margin='normal'
          />
          <TextField
            required
            label='Age'
            value={age}
            onChange={this.handleChange('age')}
            type='number'
            InputProps={{
              inputProps: {
                min: 18,
                max: 80
              }
            }}
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
          />
          <MultipleSelect
            label='Favorite fruits'
            value={fruits}
            onChange={this.handleChange('fruits')}
            data={OptionalFruits}
          />
          <TextField
            required
            label='About'
            multiline
            rowsMax='4'
            margin='normal'
            value={about}
            onChange={this.handleChange('about')}
          />
          <DialogActions>
            <Button
              onClick={this.handelClose}
              color='primary'
            >{'cancel'}
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
            >{'confirm'}
            </Button>
          </DialogActions>
        </ContainerForm>
      </Dialog>
    );
  }
}

export default NewUserForm;