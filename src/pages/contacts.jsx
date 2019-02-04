import React, { Component } from "react";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div className="pageContainer contactContainer">
        <h1>Kontakter</h1>
        <h2>Toastmastere</h2>
        <p>
          Hvis du ønsker å bidra med underholdning i form av taler eller annet
          kan du ta kontakt med toastmasterne, så setter de opp en plan for
          dagen.
        </p>
        <p>
          If you want to contribute with entertainment in the form of speeches
          or something else, please contact our toastmasters, and they will set
          up a plan.
        </p>

        <div className="contact">
          <h3>Haakon Bjørge</h3>
          <p>(+47) 974 84 884</p>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/haakon.jpeg")}
                width="200"
              />
            </figure>
          </div>
        </div>

        <div className="contact">
          <h3>Cato Bang-Melchior</h3>
          <p>(+47) 976 69 620</p>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/cato.JPG")}
                width="200"
              />
            </figure>
          </div>
        </div>

        <h2>Forlovere</h2>

        <div className="contact">
          <h3>Agnete Eilertsen</h3>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/agnete.JPG")}
                width="200"
              />
            </figure>
          </div>
        </div>

        <div className="contact">
          <h3>Tove Fagervold</h3>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/tove.JPG")}
                width="200"
              />
            </figure>
          </div>
        </div>

        <div>
          <h3>Johanne Kvivesen Aarnes</h3>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/johanne.JPG")}
                width="200"
              />
            </figure>
          </div>
        </div>

        <div className="contact">
          <h3>Sigve Eilertsen</h3>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/sigve.JPG")}
                width="200"
              />
            </figure>
          </div>
        </div>

        <div className="contact">
          <h3>Frank Robert Solheim</h3>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/frank.JPG")}
                width="200"
              />
            </figure>
          </div>
        </div>

        <div className="contact">
          <h3>Henrik Thomas Leung Huse</h3>
          <div className="contactImage">
            <figure className="swing">
              <img
                alt=""
                src={require("../images/contacts/henrik.jpeg")}
                width="200"
              />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
