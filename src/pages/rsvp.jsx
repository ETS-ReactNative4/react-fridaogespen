import React, { Component } from "react";

class RSVP extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    other: ""
  };

  handleFirstNameChange = evt => this.setState({ firstName: evt.target.value });
  handleLastNameChange = evt => this.setState({ lastName: evt.target.value });
  handleEmailChange = evt => this.setState({ email: evt.target.value });

  canBeSubmitted() {
    const { firstName, lastName, email } = this.state;
    let result =
        firstName.length > 1 &&
        lastName.length > 1 &&
        email.length > 0 &&
        email.includes("@") === true;
    return result;
  }

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    // actual submit logic...
  };

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <div className="rsvpContainer">
        <h1 id="rsvpHeader">RSVP</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputContainer">
            <label className="firstNameLabel">Fornavn: *</label>
            <input
              className="firstNameInput"
              type="text"
              name="firstName"
              required
              onChange={this.handleFirstNameChange}
            />

            <label className="lastNameLabel">Etternavn: * </label>
            <input
              className="lastNameInput"
              type="text"
              name="lastName"
              required
              onChange={this.handleLastNameChange}
            />

            <label className="emailLabel">Epost: * </label>
            <input
              className="emailInput"
              type="email"
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              required
              onChange={this.handleEmailChange}
            />

            <label className="otherLabel">Allergier eller annet:</label>
            <textarea className="otherInput" type="textarea" name="other" />

            <label className="rsvpLabel">Kommer du i bryllupet vårt?</label>
            <div className="radioInput">
              <label for="radioYes" className="radioYes">
                Ja
                <input
                  type="radio"
                  id="radioYes"
                  name="rsvp"
                  value="Yes"
                  checked
                />
              </label>

              <label for="radioNo" className="radioNo">
                Nei
                <input type="radio" id="radioNo" name="rsvp" value="No" />
              </label>
            </div>
            {/*<button disabled={!isEnabled}>Sign up</button>*/}
            <input
              disabled={!isEnabled}
              className="rsvpSubmit"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default RSVP;
