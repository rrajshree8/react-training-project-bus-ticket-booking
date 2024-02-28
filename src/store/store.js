// store.js

import { createStore, combineReducers } from 'redux';
import searchBarReducer from './reducers/searchBarreducer.js';

// Combine reducers
const rootReducer = combineReducers({
  searchBar: searchBarReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
