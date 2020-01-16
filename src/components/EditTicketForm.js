import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditNewTicket(props){
  const { ticket } = props;
  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: ticket.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditNewTicket.propTypes = {
  onEditTicket: PropTypes.func
};

export default EditNewTicket;