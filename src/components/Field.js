import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import Square from './Square';
import { setOccupiedSquare } from '../actions';




const Field = ({ selected, getAllSquaresObjects }) => {

  const style = {
    gridTemplateColumns: `repeat(${selected}, 50px)`,
    gridTemplateRows: `repeat(${selected}, 50px)`,
  }

  const arrayeOfElements = new Array(Math.pow(selected, 2)).fill(null).map(el => {

    const uniqId = uniqid();

    return (<Square key={uniqId} id={uniqId} />)

  });

  const elementsToObjects = arrayeOfElements.map(element => ({ element, isOccupaide: false }))

  getAllSquaresObjects(elementsToObjects)

  console.log(elementsToObjects);

  return (
    <div className="field" style={style}>
      {arrayeOfElements}
    </div>
  )
}

const mapStateToProps = state => {

  return {
    selected: state.selected
  }

}

const mapDispatchToProps = dispatch => {

  return {

    getAllSquaresObjects: array => {

      dispatch(setOccupiedSquare(array));

    }
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Field);
