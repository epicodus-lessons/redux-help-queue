import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      editing: false
    };
  }

  componentDidMount() {
    // this.waitTimeUpdateTimer = setInterval(() =>
    //   this.updateTicketElapsedWaitTime(),
    // 60000
    // );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime = () => {
    // const { dispatch } = this.props;
    // Object.keys(this.props.masterTicketList).forEach(ticketId => {
    //   const ticket = this.props.masterTicketList[ticketId];
    //   const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
    //   const action = a.updateTime(ticketId, newFormattedWaitTime);
    //   dispatch(action);
    // });
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewTicketToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleEditingTicketInList = () => {
    this.setState({editing: false});
    this.setState({selectedTicket: null});
  }

  handleChangingSelectedTicket = (id) => 
  {
    this.props.firestore.get({collection: 'tickets', doc: id}).then((ticket) => {
      const firestoreTicket = {
        names: ticket.get("names"),
        location: ticket.get("location"),
        issue: ticket.get("issue"),
        id: ticket.id
      }
      this.setState({selectedTicket: firestoreTicket });
    });
  }

  handleDeletingTicket = (id) => {
    this.props.firestore.delete({collection: 'tickets', doc: id});
    this.setState({selectedTicket: null});
  }

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = "Return to Ticket List";
      if (this.state.editing ) {      
        currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList } />
      }
      else if (this.state.selectedTicket != null) {
        currentlyVisibleState = 
        <TicketDetail 
          ticket = {this.state.selectedTicket} 
          onClickingDelete = {this.handleDeletingTicket} 
          onClickingEdit = {this.handleEditClick} />
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      } else {
        currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
        buttonText = "Add Ticket";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

NewTicketControl.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

// const enhance = connect(
//   mapStateToProps,
//   ({ firebase: { auth, profile } }) => ({
//     auth,
//     profile
//   })
// )

// NewTicketControl = enhance(NewTicketControl);

NewTicketControl = connect(mapStateToProps)(NewTicketControl);

export default withFirestore(NewTicketControl);
