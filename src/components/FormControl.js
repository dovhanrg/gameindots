import React from 'react';
import { connect } from 'react-redux';

import { setPlayerName } from '../actions'

import Select from './Select';
import Input from './Input';

const FormControl = ({ getName }) => {

  const inputValue = React.createRef();

  const submithName = (e) => {
    
    e.preventDefault();
    getName(inputValue);
    console.log('click')

  }

  const eventStop = event => {
    event.preventDefault();
    console.log('click')
  }

  return <div>
    <form onSubmit={(e) => eventStop(e)} >
      <Select />
      <Input type="text" placeholder="Enter your name" ref={inputValue} />
      <button onClick={(e) => submithName(e)} >PLAY</button>
    </form>
  </div>
}

const mapDispatchToProps = dispatch => {

  return {
    getName: (name) => dispatch(setPlayerName(name))
  }

}

export default connect(mapDispatchToProps)(FormControl);
