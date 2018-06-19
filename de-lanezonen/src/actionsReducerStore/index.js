
// De Lanezonen

// actionsReducerStore / index.js

import { applyMiddleware, createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'


// switch button muziek aan/af
// actions.js
export const activateInfo = paginaInfo => ({
  type: 'ACTIVATE_INFO',
  paginaInfo,
});

export const closeInfo = () => ({
  type: 'CLOSE_INFO',
});


// switch button muziek aan/af
// reducers.js
export const paginaInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_INFO':
      return action.paginaInfo;
    case 'CLOSE_INFO':
      return {};
    default:
      return state;
  }
};

// change button : go to another page
// 'redux-first-routing' (createBrowserHistory, routerReducer, routerMiddleware, startListener)


// 1. Create the history object (go to another page)

const history = createBrowserHistory()

// 2. Build the root reducer (button muziek aan/af + go to another page)

export const rootReducer = combineReducers({
  paginaInfoReducer,
  form: formReducer,
  location: routerReducer,
});

// 3. Build the middleware (go to another page)

const middleware = routerMiddleware(history)

// 4. Create the store (button muziek aan/af + go to another page)

export const store = createStore(rootReducer, {}, applyMiddleware(middleware));

// 5. Start the history listener (go to another page)

startListener(history, store);
