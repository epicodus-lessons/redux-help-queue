import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { ReduxFirestoreProvider } from 'redux-firestore'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from "./firebase";
import { store } from "./store";

// import rootReducer from './reducers/index';
// import thunk from 'redux-thunk';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

const rrfProps = {
  firebase,
  config: {
		userProfile: "users"
	},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();