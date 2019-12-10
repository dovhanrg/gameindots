import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import Square from './Square';

const Field = ({ selected }) => {

  // const squaresNumber = selected*selected;

  const style = {
    gridTemplateColumns: `repeat(${selected}, 50px)`,
    gridTemplateRows: `repeat(${selected}, 50px)`,
  }

  const res = new Array(Math.pow(selected, 2)).fill(null).map(el => {
    return <Square key={uniqid()} />
  });

  return (
    <div className="field" style={style}>
      {res}
    </div>
  )
}

const mapStateToProps = state => {

  return {
    selected: state.selected
  }

}

export default connect(mapStateToProps)(Field);
