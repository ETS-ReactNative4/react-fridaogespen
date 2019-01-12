import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";

export default class RSVP extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      people: [],
      person: {
        firstName: "test",
        lastName: "testesen",
        email: "haha@haha.no",
        other: "hed",
        music: "adfh",
        fridayAttendance: false,
        fridayDinner: false,
        fridayEntertainment: false,
        saturdayAttendance: false
      }
    };
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
    fetch("http://localhost:3306")
      .then(response => response.json())
      //then(response => this.setState({ people: response.data }))
      .catch(err => console.error(err));
  };

  addPerson = _ => {
    const { person } = this.state;
    fetch(
      fetch(`http://localhost:3306/add?firstName=${person.firstName}
      &lastName=${person.lastName}
      &email=${person.email}
      &other=${person.other}
      &music=${person.music}
      &fridayAttendance=${person.fridayAttendance}
      &fridayDinner=${person.fridayDinner}
      &fridayEntertainment=${person.fridayEntertainment}
      &saturdayAttendance=${person.saturdayAttendance}`),
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(person)
      }
    );
  };

  toggleFridayAttendance = () => {
    this.setState({
      fridayAttendance: !this.state.fridayAttendance,
      show: !this.state.show
    });
  };

  toggleDinnerChange = () => {
    this.setState({
      fridayDinner: !this.state.fridayDinner
    });
  };

  toggleEntertainmentChange = () => {
    this.setState({
      fridayEntertainment: !this.state.fridayEntertainment
    });
  };

  toggleSaturdayAttendance = () => {
    this.setState({
      saturdayAttendance: !this.state.saturdayAttendance
    });
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

            <label className="rsvpDayLabel">
              Hvilke dager kan du delta på? (Hvis du ikke sjekker av noen
              alternativer, antar vi at du ikke kan komme noen av dagene)
            </label>
            <div className="rsvpDayInput">
              <label
                for="checkFridayAttendance"
                className="checkFridayAttendance"
              >
                Fredag
                <input
                  type="checkbox"
                  id="checkFridayAttendance"
                  name="fridayAttendance"
                  checked={person.fridayAttendance}
                  onClick={this.toggleFridayAttendance}
                  onChange={e =>
                    this.setState({
                      person: { ...person, fridayAttendance: e.target.checked }
                    })
                  }
                />
              </label>

              <label
                for="checkSaturdayAttendance"
                className="checkSaturdayAttendance"
              >
                Lørdag
                <input
                  type="checkbox"
                  id="checkSaturdayAttendance"
                  name="saturdayAttendance"
                  checked={person.saturdayAttendance}
                  onClick={this.toggleSaturdayAttendance}
                  onChange={e =>
                    this.setState({
                      person: {
                        ...person,
                        saturdayAttendance: e.target.checked
                      }
                    })
                  }
                />
              </label>
            </div>

            <ToggleDisplay
              show={this.state.show}
              class="fridayExtraCollapse"
            >
              <label className="rsvpFridayExtraLabel">
                Hvis du kommer på fredag, ønsker du å være med på middag,
                underholdning, eller begge deler?
              </label>

              <div className="rsvpFridayExtraInput">
                <label for="checkFridayDinner" className="checkFridayDinner">
                  Middag
                  <input
                    type="checkbox"
                    id="checkFridayDinner"
                    name="fridayDinner"
                    checked={person.fridayDinner}
                    onClick={this.toggleDinnerChange}
                    onChange={e =>
                      this.setState({
                        person: { ...person, fridayDinner: e.target.checked }
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
                    checked={person.fridayEntertainment}
                    onClick={this.toggleEntertainmentChange}
                    onChange={e =>
                      this.setState({
                        person: {
                          ...person,
                          fridayEntertainment: e.target.checked
                        }
                      })
                    }
                  />
                </label>
              </div>
            </ToggleDisplay>

            <input
              disabled={!this.canBeSubmitted()}
              className="rsvpSubmit"
              type="submit"
              value="Registrer"
              onClick={() => this.addPerson()}
            />
          </div>
        </form>
      </div>
    );
  }
}
