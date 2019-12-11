//  constants for action creators

export const DATA_FETCHING = 'DATA_FETCHING';
export const SELECT = 'SELECT';
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_OCCUPIED_SQUARE = 'SET_OCCUPIED_SQUARE';


//  actionst creators

export const dataFetching = body => {

  return {
    type: DATA_FETCHING,
    body
  }

}

export const isSelected = selectedValue => {

  return {
    type: SELECT,
    selected: selectedValue
  }

}

export const setPlayerName = name => {

  return {
    type: SET_PLAYER_NAME,
    name
  }

}

export const setOccupiedSquare = array => {

  return {
    type: SET_OCCUPIED_SQUARE,
    array
  }

}
