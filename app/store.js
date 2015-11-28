import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import qweryMeApp from './reducers/reducers';

const store = applyMiddleware(
  thunk
)(createStore)(qweryMeApp);

export default store;