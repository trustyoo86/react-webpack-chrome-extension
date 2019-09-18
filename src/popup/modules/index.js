'use strict';

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// ActionTypes
const CREATE = 'example/CREATE';
const REMOVE = 'example/REMOVE';
const INCREMENT = 'example/INCREMENT';
const DECREMENT = 'example/DECREMENT';
const SET_COLOR = 'example/SET_COLOR';

// Action creators
export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const setColor = createAction(SET_COLOR);

// initialState
const initialState = Map({
  counters: List([
    Map({
      color: 'black',
      number: 0,
    }),
  ]),
});

export default handleActions({
  [CREATE]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.push(
      Map({
        color: action.payload,
        number: 0,
      }),
    ));
  },
  [REMOVE]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.pop());
  },
  [INCREMENT]: (state, action) => state,
  [DECREMENT]: (state, action) => state,
  [SET_COLOR]: (state, action) => state,
}, initialState);