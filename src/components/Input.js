import React from 'react';
import { connect } from 'react-redux';

import { setPlayerName } from '../actions/actions'

const Input = ({ placeholder, type, getName }) => {

  console.log('placeholder: ', placeholder, '; type: ',type, '; getName: ',getName)

  return <input type={type} placeholder={placeholder} />
}

const mapDispatchToProps = dispatch => {

  return {
    getName: (name) => dispatch(setPlayerName(name))
  }

}

export default connect(mapDispatchToProps)(Input);