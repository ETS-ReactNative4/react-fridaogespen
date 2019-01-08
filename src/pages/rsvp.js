import React, { Component } from "react";

export default class RSVP extends Component {
  state = {
    people: [],
    person: {
      firstName: "",
      lastName: "",
      email: "",
      other: "",
      music: "",
      fridayAttendance: true,
      fridayDinner: false,
      fridayEntertainment: false,
      saturdayAttendance: true
    }
  };

  handleFirstName = evt =>
    this.setState({ person: { firstName: evt.target.value } });
  handleLastName = evt =>
    this.setState({ person: { lastName: evt.target.value } });
  handleEmail = evt => this.setState({ person: { email: evt.target.value } });
  handleOther = evt => this.setState({ person: { other: evt.target.value } });
  handleMusic = evt => this.setState({ person: { music: evt.target.value } });
  handleFridayAttendance = evt =>
    this.setState({ person: { fridayAttendance: evt.target.value } });
  handleFridayDinner = evt =>
    this.setState({ person: { fridayDinner: evt.target.value } });
  handleFridayEntertainment = evt =>
    this.setState({ person: { fridayEntertainment: evt.target.value } });
  handleSaturdayAttendance = evt =>
    this.setState({ person: { saturdayAttendance: evt.target.value } });

  canBeSubmitted() {
    console.log(this.state.person.firstName.length);

    const result =
      this.state.person.firstName.length > 1 &&
      this.state.person.lastName.length > 1 &&
      this.state.person.email.length > 0 &&
      this.state.person.email.includes("@") === true;
    return result;
  }

  addPerson() {
    const { person } = this.state;
    fetch(
      `http://localhost:4000/person/add?firstName=${
        person.firstName
      }&lastName=${person.lastName}&email=${person.email}&other=${
        person.other
      }&music=${person.music}&fridayAttendance=${
        person.fridayAttendance
      }&fridayDinner=${person.fridayDinner}&fridayEntertainment=${
        person.fridayEntertainment
      }&saturdayAttendance=${person.saturdayAttendance}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(person)
      }
    );
  }

  renderPerson = ({
    id,
    firstname,
    lastname,
    email,
    other,
    music,
    fridayAttendance,
    fridayDinner,
    fridayEntertainment,
    saturdayAttendance
  }) => (
    <div key={id}>
      {
        (firstname,
        lastname,
        email,
        other,
        music,
        fridayAttendance,
        fridayDinner,
        fridayEntertainment,
        saturdayAttendance)
      }
    </div>
  );

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      //return;
    } else {
      // actual submit logic...
      return evt.addPerson();
    }
  };

  render() {
    const { people, person } = this.state;

    return (
      <div className="rsvpContainer">
        {people.map(this.renderPerson)}
        <h1 id="rsvpHeader">RSVP</h1>
        <form>
          <div className="inputContainer">
            <label className="firstNameLabel">Fornavn: *</label>
            <input
              className="firstNameInput"
              type="text"
              name="firstName"
              required
              onChange={this.handleFirstName.bind(this)}
              value={person.firstName}
            />

            <label className="lastNameLabel">Etternavn: * </label>
            <input
              className="lastNameInput"
              type="text"
              name="lastName"
              required
              onChange={this.handleLastName.bind(this)}
              value={person.lastName}
            />

            <label className="emailLabel">Epost: * </label>
            <input
              className="emailInput"
              type="email"
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              required
              onChange={this.handleEmail.bind(this)}
              value={person.email}
            />

            <label className="otherLabel">Allergier eller annet:</label>
            <textarea
              className="otherInput"
              type="textarea"
              name="other"
              onChange={this.handleOther.bind(this)}
              value={person.other}
            />

            <label className="musicLabel">Musikkønsker:</label>
            <textarea
              className="musicInput"
              type="textarea"
              name="music"
              onChange={this.handleMusic.bind(this)}
              value={person.music}
            />

            <label className="rsvpFridayLabel">Vil du delta på fredag? *</label>
            <div className="rsvpFridayInput">
              <label for="radioFridayYes" className="radioFridayYes">
                Ja
                <input
                  type="radio"
                  id="radioFridayYes"
                  name="fridayAttendance"
                  value="Yes"
                  checked
                  onChange={this.handleFridayAttendance.bind(this)}
                />
              </label>

              <label for="radioFridayNo" className="radioFridayNo">
                Nei
                <input
                  type="radio"
                  id="radioFridayNo"
                  name="fridayAttendance"
                  value="No"
                  onChange={this.handleFridayAttendance.bind(this)}
                />
              </label>
            </div>

            <label className="rsvpFridayExtraLabel">
              Hvis ja, ønsker du å være med på middag, underholdning, eller
              begge deler?
            </label>
            <div className="rsvpFridayExtraInput">
              <label for="checkFridayDinner" className="checkFridayDinner">
                Middag
                <input
                  type="checkbox"
                  id="checkFridayDinner"
                  name="fridayDinner"
                  value="Dinner"
                  onChange={this.handleFridayDinner.bind(this)}
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
                  name="fridayEntertainment"
                  value="Entertainment"
                  onChange={this.handleFridayEntertainment.bind(this)}
                />
              </label>
            </div>

            <label className="rsvpSaturdayLabel">
              Vil du delta på lørdag? *
            </label>
            <div className="rsvpSaturdayInput">
              <label for="radioSaturdayYes" className="radioSaturdayYes">
                Ja
                <input
                  type="radio"
                  id="radioSaturdayYes"
                  name="saturdayAttendance"
                  value="Yes"
                  checked
                  onChange={this.handleSaturdayAttendance.bind(this)}
                />
              </label>

              <label for="radioSaturdayNo" className="radioSaturdayNo">
                Nei
                <input
                  type="radio"
                  id="radioSaturdayNo"
                  name="saturdayAttendance"
                  value="No"
                  onChange={this.handleSaturdayAttendance.bind(this)}
                />
              </label>
            </div>

            <input
              disabled={!this.canBeSubmitted()}
              className="rsvpSubmit"
              type="submit"
              value="Registrer"
              onClick={() => this.handleSubmit()}
            />
          </div>
        </form>
      </div>
    );
  }
}
