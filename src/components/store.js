import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { DATA_FETCHING, SELECT, SET_PLAYER_NAME, dataFetching } from '../actions/actions';


const initialState = {
  num: 0,
  body: {},
  selected: 5,
  player: 'name'
}

const getGameMode = () => {

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
      console.log(action)
      return Object.assign({}, state, { player: action.name });

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('store has been changed to', store.getState())
})


store.dispatch((dispatch) => {
  getGameMode().then((body) => dispatch(dataFetching(body)))
})

export default store;


