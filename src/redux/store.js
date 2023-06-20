
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

/**
 * Questo di sotto viene usato solo per visualizzare bene l'estensione di Chrome altrimenti sarebbe bastato createStore(reducers, {});
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware()
  ));

  export default store;