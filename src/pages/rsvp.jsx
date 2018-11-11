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

            <label className="musicLabel">Musikkønsker:</label>
            <textarea className="musicInput" type="textarea" name="music" />

            <label className="rsvpFridayLabel">Vil du delta på fredag?</label>
            <div className="rsvpFridayInput">
              <label for="radioFridayYes" className="radioFridayYes">
                Ja
                <input
                  type="radio"
                  id="radioFridayYes"
                  name="rsvpFriday"
                  value="Yes"
                  checked
                />
              </label>

              <label for="radioFridayNo" className="radioFridayNo">
                Nei
                <input type="radio" id="radioFridayNo" name="rsvpFriday" value="No" />
              </label>
            </div>

            <label className="rsvpFridayExtraLabel">
              Hvis ja, ønsker du å være med på middag, underholdning, eller
              begge deler??
            </label>
            <div className="rsvpFridayExtraInput">
              <label for="checkFridayDinner" className="checkFridayDinner">
                Middag
                <input
                  type="checkbox"
                  id="checkFridayDinner"
                  name="rsvpFridayExtra"
                  value="Dinner"
                />
              </label>

              <label
                for="checkFridayEntertainment"
                className="checkFridayEntertainment"
              >
                Underholdning
                <input
                  type="checkbox"
                  id="checkFridayEntertainment"
                  name="rsvpFridayExtra"
                  value="Entertainment"
                />
              </label>
            </div>

            <label className="rsvpSaturdayLabel">Vil du delta på lørdag?</label>
            <div className="rsvpSaturdayInput">
              <label for="radioSaturdayYes" className="radioSaturdayYes">
                Ja
                <input
                  type="radio"
                  id="radioSaturdayYes"
                  name="rsvpSaturday"
                  value="Yes"
                  checked
                />
              </label>

              <label for="radioSaturdayNo" className="radioSaturdayNo">
                Nei
                <input
                  type="radio"
                  id="radioSaturdayNo"
                  name="rsvpSaturday"
                  value="No"
                />
              </label>
            </div>

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
