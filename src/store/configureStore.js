import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from '../reducers/location';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      location: locationReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
