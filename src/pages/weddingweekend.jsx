import React, { Component } from "react";

class WeddingWeekend extends Component {
  state = {};
  render() {
    return (
      <div className="pageContainer">
        <h1>Bryllupshelgen</h1>
        <p>For English, please scroll further down.</p>

        <h2>Hotell</h2>
        <p>
          Bryllupshelgen foregår på{" "}
          <a
            className="weddingweekendLink"
            href="https://www.klaekken.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klækken Hotell
          </a>{" "}
          i Hønefoss. Alle gjester som ønsker å bo på hotellet kan kontakte
          Klækken for å booke rom ved å ringe 321 40 000. For å få ekstra
          rabatter kan dere oppgi at dere skal overnatte på hotellet i anledning
          vårt bryllup.
        </p>

        <h2>Ankomst</h2>
        <p>
          Det går flybuss, Askeladden Reiser, fra Gardermoen til Klækken Hotell.{" "}
          <br />{" "}
          <a
            className="weddingweekendLink"
            href="https://askeladden.net/flybuss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rutetabellen kan leses her
          </a>
        </p>

        <h2>Fredag 02. august</h2>
        <p>
          På fredagskvelden arrangeres det grillkveld på Klækken hotell klokken
          19.00 med quiz i etterkant. Middagen er valgfri og koster 295,- per
          person. Hvis det er fint vær sitter vi ute, og Klækken setter opp en
          utebar for oss.
        </p>
        <p>
          Dersom du ikke ønsker å delta på middagen kan du likevel være med på
          quizen etterpå. Husk da å huk av for underholdning i svarkortet.
        </p>

        <h2>Lørdag 03. august</h2>
        <p>Vielsen finner sted klokken 13.00 i Norderhov Kirke.</p>
        <p>
          Bryllupsmottakelsen vil være på Klækken Hotell rundt klokken 16.00.
          Toastmastere og forlovere vil samle alle sammen ute i hagen på Klækken
          for mottakelsen.
        </p>
        <p>
          Vi går til bords rundt klokken 16.30 hvor det blir servert treretters
          meny.
        </p>
        <p>
          Alle med allergier, intoleranse eller andre matpreferanser må si ifra
          ved å skrive det under "Alleriger" i svarkortet, eller kontakte oss
          direkte.
        </p>
        <p>
          Vi må få beskjed hvis det er noen barn som ønsker egen tilrettelagt
          barnemeny, hvis ikke vil en barneversjon av den egentlige menyen
          serveres. Dersom det er noen barn som ønsker voksenporsjon må vi også
          få beskjed om det. Ta også kontakt dersom noen av barna har behov for
          en barnestol.
        </p>
        <p>
          Klækken er også behjelpelig med å sette opp et lekerom for de minste i
          underetasjen. Alle barn er også velkomne til å ta med en favorittleke
          eller to.
        </p>
        <p>
          Kaffegjestene er invitert til bryllupsfesten klokken 20.30, men er
          hjertelig velkomne til vielsen også, og selvfølgelig til å overnatte
          på Klækken hvis det er ønskelig.
        </p>
        <br />
        <h1>The Wedding Weekend</h1>
        <h2>Hotel</h2>
        <p>
          The wedding weeking takes place at{" "}
          <a
            className="weddingweekendLink"
            href="https://www.klaekken.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klækken Hotell
          </a>{" "}
          in Hønefoss. All our guests who wish to stay at Klækken for the
          weekend can contact Klækken by calling (+47) 321 40 000. For a
          discount you can state that you are going to our wedding.
        </p>
        <h2>Arrival</h2>
        <p>
          Askeladden Reiser drives busses from Gardermoen to Klækken Hotel.{" "}
          <a
            className="weddingweekendLink"
            href="https://askeladden.net/flybuss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The bustable can be read here
          </a>
        </p>

        <h2>Friday 02. August</h2>
        <p>
          There will be arranged a barbeque at Klækken Hotel at 7 PM with an
          after dinner quiz. The dinner is optional and costs 295 NOK per
          person. If the weather allows it, we will be sitting outside, and
          Klækken will set up a bar for us outside as well.
        </p>
        <p>
          If you don't prefer to eat dinner, you can still participate in the
          quiz. Remember to check the checkbox in the RSVP("Svarkort") for
          "entertainment".
        </p>
        <h2>Saturday 03. August</h2>
        <p>The wedding ceremony starts at 1 PM in Norderhov Church.</p>
        <p>
          The wedding reception takes place at Klækken Hotel around 4 PM. Our
          toastmasters will gather everyone outside for the reception.
        </p>
        <p>
          The dinner will be ready at 4.30-5 PM, where a three-course menu will
          be served.
        </p>
        <p>
          If you have any allergies or foodpreferance please let us know by
          writing in the textfield labeled "Allergies" in the RSVP-form, or
          contact us directly.
        </p>
        <p>
          The coffeeguests are invited at 8.30 PM, but are welcome to the
          ceremony as well.
        </p>
      </div>
    );
  }
}

export default WeddingWeekend;
