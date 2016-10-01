import React from 'react';
import { createStore } from 'redux';

const defaultState = {
  name: 'Zordon'
};

const userSession = (state = defaultState, action) => {
  return state;
}

export default createStore(userSession);
