import * as c from './ActionTypes';
import { db } from './../firebase';

export const addTicket = (ticket) => {
  const { names, location, issue } = ticket;
  return () => db.collection("tickets").add({
    names: names,
    location: location,
    issue: issue,
    timeOpen: new Date().getTime()
  });
}

// export const addTicket = (ticket) => {
//     const { names, location, issue } = ticket;
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     firestore.collection('tickets').add({
//       names: names,
//       location: location,
//       issue: issue,
//       timeOpen: new Date().getTime()
//     }).then(()=> {
//       dispatch({ type: 'CREATE_TICKET', ticket });
//     });
//   }
// };

// export const addTicket = (ticket) => {
//   const { names, location, issue } = ticket;
//   return () => {
//     const firestore = useFirestore()
//     useFirestoreConnect('tickets')
//     firestore.collection('tickets').add({
//       names: names,
//       location: location,
//       issue: issue,
//       timeOpen: new Date().getTime()
//     })
//       // .then(() => {
//       //   console.log('Then it was done')
//       //   dispatch({ type: c.ADD_TICKET, ticket })
//       // })
//       // .catch(err => {
//       //   dispatch({ type: ERROR, err })
//       // })
//   }
// }


// export const addTicket = (ticket) => {
//   const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;
//   return {
//     type: c.ADD_TICKET,
//     names: names,
//     location: location,
//     issue: issue,
//     id: id,
//     formattedWaitTime,
//     timeOpen: timeOpen
//   }
// }

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});