import React, { Component } from "react";

export default class RSVP extends Component {
  render() {
    //const { people, person } = this.state;

    return (
      <div className="rsvpContainer">
        <h1 id="rsvpHeader">RSVP</h1>
        <p id="rsvpP">
          Svar gjerne om du kommer i bryllupet vårt her også, selv om du
          allerede har svart på svarkortet som fulgte med invitasjonen
        </p>
        <iframe
          title="rsvpForm"
          id="rsvpForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfJQsdh9boQtUi1EqhgdHJVqSaZbnEbFIF5ev2bjxByf7PMkA/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </div>
    );
  }
}
