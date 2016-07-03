import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import spotHotReducer from '../reducers';

const configureStore = initialState => {
  console.info('you are in: ', process.env.NODE_ENV, 'mode');
  const enhancer = process.env.NODE_ENV === 'development' ? compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  ) : compose(applyMiddleware(thunk));
  const store = createStore( spotHotReducer, initialState, enhancer );
  return store;
}

export default configureStore;
