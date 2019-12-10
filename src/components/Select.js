import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { isSelected } from '../actions/actions';


const Select = ({ body, select }) => {

  // console.log(selected);

  const options = Object.entries(body).map(el => {

    const modeName = el[0].substr(0, 1).toUpperCase() + el[0].substr(1, el[0].lastIndexOf('M') - 1);

    return <option key={uniqid()} value={el[1].field}>{`${modeName} Mode`}</option>
  })

  return (
    <select onChange={ (e) => select(e)  } name="" id="">
      {options}
    </select>
  )
}

const mapStateToProps = state => {
  return {
    body: state.body,
    // selected: state.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    select: (e) => dispatch(isSelected(e))
  };
 }

export default connect(mapStateToProps, mapDispatchToProps)(Select);
