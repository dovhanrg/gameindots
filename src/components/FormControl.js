import React from 'react';
import { connect } from 'react-redux';

import { setPlayerName } from '../actions'

import Select from './Select';

const FormControl = ({ getName }) => {

  let textInput = React.createRef();

  const submithName = (e) => {

    e.preventDefault();

    getName(textInput.current.value);

  }


  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(e) }} >
        <Select />
        <input type="text" placeholder="Enter your name" ref={textInput} />
        <button onClick={(e) => submithName(e)} >PLAY</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {

  return {
    getName: (name) => dispatch(setPlayerName(name))
  }

}

export default connect(null, mapDispatchToProps)(FormControl);
