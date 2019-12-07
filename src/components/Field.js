import React from 'react';
import uniqid from 'uniqid';

import Square from './Square';


const Field = () => {
  const squaresNumber = 5;

  const style = {
    gridTemplateColumns: `repeat(${squaresNumber}, 50px)`,
    gridTemplateRows: `repeat(${squaresNumber}, 50px)`,
  }

  const res = new Array(squaresNumber).fill(null).map(el => {
    return <Square key={uniqid()}/>
  });
  console.log(style)
  return (
    <div className="field" style={style}>
      {res}
    </div>
  )
}

export default Field;
