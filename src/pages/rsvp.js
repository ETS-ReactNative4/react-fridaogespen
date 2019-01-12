import React, { Component } from "react";

export default class RSVP extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      person: {
        firstName: "mokkkkk",
        lastName: "afdhsdfjaf",
        email: "aadfh@afhad.no",
        other: "afh",
        music: "lalalallaa",
        fridayAttendance: true,
        fridayDinner: false,
        fridayEntertainment: false,
        saturdayAttendance: true
      }
    };
    //this.onSubmit = this.handleSubmit.bind(this);
  }

  canBeSubmitted() {
    let result =
      this.state.person.firstName.length > 1 &&
      this.state.person.lastName.length > 1 &&
      this.state.person.email.length > 0 &&
      this.state.person.email.includes("@") === true;
    return result;
  }

  renderPerson = ({ id, firstName }) => <div key={id}>{firstName}</div>;

  componentDidMount() {
    this.getPerson();
  }

  getPerson = _ => {
    fetch("fridaogespen01.mysql.domeneshop.no/")
      .then(response => response.json())
      //.then(response => this.setState({ people: response.data }))
      .catch(err => console.error(err));
  };

  addPerson = _ => {
    const { person } = this.state;
    fetch(`fridaogespen01.mysql.domeneshop.no/add?firstName=${person.firstName}
      &lastName=${person.lastName}
      &email=${person.email}
      &other=${person.other}
      &music=${person.music}
      &fridayAttendance=${person.fridayAttendance}
      &fridayDinner=${person.fridayDinner}
      &fridayEntertainment=${person.fridayEntertainment}
      &saturdayAttendance=${person.saturdayAttendance}`)
      .then(this.getPerson)
      .catch(err => console.error(err));
  };

  handleSubmit = evt => {
    //if (!this.canBeSubmitted()) {
    if (!evt.target.checkValidity()) {
      evt.preventDefault();
      //return;
    } else {
      var self = this;
      // On submit of the form, send a POST request with the data to the server.
      fetch("/add", {
        method: "POST",
        data: {
          name: self.refs.name,
          job: self.refs.job
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(body) {
          console.log(body);
        });
    }
  };

  render() {
    const { people, person } = this.state;
    return (
      <div className="rsvpContainer">
        {people.map(this.renderPerson)}
        <h1 id="rsvpHeader">RSVP</h1>
        {/* <form onChange={this.handleSubmit}> */}
          <form onSubmit={this.onSubmit}>
          <div className="inputContainer">
            <label className="firstNameLabel">Fornavn: *</label>
            <input
              className="firstNameInput"
              type="text"
              name="firstName"
              required
              value={person.firstName}
              onChange={e =>
                this.setState({
                  person: { ...person, firstName: e.target.value }
                })
              }
            />

            <label className="lastNameLabel">Etternavn: * </label>
            <input
              className="lastNameInput"
              type="text"
              name="lastName"
              required
              value={person.lastName}
              onChange={e =>
                this.setState({
                  person: { ...person, lastName: e.target.value }
                })
              }
            />

            <label className="emailLabel">Epost: * </label>
            <input
              className="emailInput"
              type="email"
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              required
              value={person.email}
              onChange={e =>
                this.setState({
                  person: { ...person, email: e.target.value }
                })
              }
            />

            <label className="otherLabel">Allergier eller annet:</label>
            <textarea
              className="otherInput"
              type="textarea"
              name="other"
              value={person.other}
              onChange={e =>
                this.setState({
                  person: { ...person, other: e.target.value }
                })
              }
            />

            <label className="musicLabel">Musikkønsker:</label>
            <textarea
              className="musicInput"
              type="textarea"
              name="music"
              value={person.music}
              onChange={e =>
                this.setState({
                  person: { ...person, music: e.target.value }
                })
              }
            />

            <label className="rsvpFridayLabel">Vil du delta på fredag? *</label>
            <div
              className="rsvpFridayInput"
              onChange={e =>
                this.setState({
                  person: { ...person, fridayAttendance: e.target.value }
                })
              }
            >
              <label for="radioFridayYes" className="radioFridayYes">
                Ja
                <input
                  type="radio"
                  id="radioFridayYes"
                  name="fridayAttendance"
                  value="true"
                  checked
                />
              </label>

              <label for="radioFridayNo" className="radioFridayNo">
                Nei
                <input
                  type="radio"
                  id="radioFridayNo"
                  name="fridayAttendance"
                  value="false"
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
                  value={person.fridayDinner}
                  onChange={e =>
                    this.setState({
                      person: { ...person, fridayDinner: e.target.value }
                    })
                  }
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
                  value={person.fridayEntertainment}
                  onChange={e =>
                    this.setState({
                      person: { ...person, fridayEntertainment: e.target.value }
                    })
                  }
                />
              </label>
            </div>

            <label className="rsvpSaturdayLabel">
              Vil du delta på lørdag? *
            </label>
            <div
              className="rsvpSaturdayInput"
              onChange={e =>
                this.setState({
                  person: { ...person, saturdayAttendance: e.target.value }
                })
              }
            >
              <label for="radioSaturdayYes" className="radioSaturdayYes">
                Ja
                <input
                  type="radio"
                  id="radioSaturdayYes"
                  name="saturdayAttendance"
                  value="true"
                  checked
                />
              </label>

              <label for="radioSaturdayNo" className="radioSaturdayNo">
                Nei
                <input
                  type="radio"
                  id="radioSaturdayNo"
                  name="saturdayAttendance"
                  value="false"
                />
              </label>
            </div>

            <input
              disabled={!this.canBeSubmitted()}
              className="rsvpSubmit"
              type="submit"
              value="Registrer"
              onClick={this.addPerson}
            />
          </div>
        </form>
      </div>
    );
  }
}
