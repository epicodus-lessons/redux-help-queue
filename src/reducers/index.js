import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  firebase,
  firestore: firestoreReducer
});

export default rootReducer;