import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { DATA_FETCHING, SELECT, SET_PLAYER_NAME, SET_OCCUPIED_SQUARE, dataFetching } from '../actions/actions';


const initialState = {
  num: 0,
  body: {},
  selected: 5,
  timeDelay: 0,
  player: 'name',
  squares: []
}

const getGameData = () => {

  return fetch('https://starnavi-frontend-test-task.herokuapp.com/game-settings')
    .then(data => data.json())
    .then(body => {
      return body;
    })
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case DATA_FETCHING:
      return Object.assign({}, state, { body: action.body });

    case SELECT:
      return Object.assign({}, state, { selected: Number(action.selected) });

    case SET_PLAYER_NAME:
      return Object.assign({}, state, { player: action.name });

    case SET_OCCUPIED_SQUARE:
      return Object.assign({}, state, {squares: action.array });

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('store has been changed to', store.getState())
})


store.dispatch((dispatch) => {
  getGameData().then((body) => dispatch(dataFetching(body)))
})

export default store;


