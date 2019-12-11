import React from 'react';
import { connect } from 'react-redux';

import { setOccupiedSquare } from '../actions';

const Square = ({ id, getClickedSquare, squares }) => {

  return (
    <div
      id={id}
      className="square"
      onClick={
        (e) => {
          const mapped = squares.map(element => {

            if (element.element.key === e.target.id && element.isOccupaide === false) {
              e.target.classList.add('user');
              return Object.assign({}, element, { isOccupaide: 'user' })
            }

            return element;

          });

          getClickedSquare(mapped);

        }
      }
    >

    </div>
  )
}

const mapStateToProps = state => {

  return {

    squares: state.squares

  }

}

const mapDispatchToProps = dispatch => {

  return {

    getClickedSquare: array => {

      return dispatch(setOccupiedSquare(array));

    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
