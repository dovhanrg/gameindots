//  constants for action creators

export const DATA_FETCHING = 'DATA_FETCHING';
export const SELECT = 'SELECT';
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';


//  actionst creators

export const dataFetching = body => {

  return {
    type: DATA_FETCHING,
    body
  }

}

export const isSelected = event => {

  return {
    type: SELECT,
    selected: event.target.value
  }

}

export const setPlayerName = name => {
  
  return {
    type: SET_PLAYER_NAME,
    player: name
  }

}