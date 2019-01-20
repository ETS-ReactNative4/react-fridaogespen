import React, { Component } from "react";

class WeddingWeekend extends Component {
  state = {};
  render() {
    return (
      <div className="pageContainer">
        <h1>Bryllupshelgen</h1>
        <p>For english, please scroll down.</p>

        <h2>Hotell</h2>
        <p>
          Bryllupshelgen foregår på{" "}
          <a
            href="https://www.klaekken.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klækken Hotell
          </a>{" "}
          i Hønefoss. Alle gjester som ønsker å bo der kan kontakte Klækken for
          å booke rom ved å ringe 321 40 000. For rabatt kan dere oppgi at dere
          skal i vårt bryllup.
        </p>

        <h2>Barn</h2>
        <p>
          Vi ordner lekerom for de minste, og de kan gjerne ta med en
          favorittleke eller to. Alle barn som vil ha egen barnemeny må kontakte
          oss, hvis ikke får de en barneversjon av den egentlige menyen. Ta også
          kontakt hvis noen barn/babyer trenger barnestol.
        </p>

        <h2>Ankomst</h2>
        <p>
          Askeladden Reiser kjører buss fra Gardermoen til Klækken Hotell.{" "}
          <a
            href="https://askeladden.net/flybuss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rutetabellen kan leses her
          </a>
        </p>

        <h2>Fredag 02. August</h2>
        <p>
          Kl 19.00 arrangeres det grillkveld på Klækken Hotell med quiz etter
          middagen. Middagen er valgfri og koster 295,- per person. Hvis det er
          fint vær sitter vi ute, og Klækken stiller da opp med bar ute for oss.
          <br />
          Dersom du ikke ønsker å spise middag kan du allikevel være med på
          quizen. Husk da å huk av for underholdning i RSVP.
        </p>

        <h2>Lørdag 03. August</h2>
        <p>
          Kl 13.00 gifter vi oss i Norderhov Kirke. Bryllupsmottakelsen vil være
          på Klækken Hotell ca kl 16.00, og vi går til bords rundt kl 16.30 hvor
          det blir servert treretters meny.
          <br />
          Alle med allergier må si ifra ved å skrive det under "Alleriger" i
          RSVP, eller kontakte oss direkte. Kaffegjestene er invitert til kl
          20.30, men må gjerne komme i vielsen også.
        </p>
        <br />

        {/* English */}
        <h1>The Wedding Weekend</h1>
        <h2>Hotel</h2>
        <p>
          The wedding weeking takes place at{" "}
          <a
            href="https://www.klaekken.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klækken Hotell
          </a>{" "}
          in Hønefoss. All guests who wish to stay there can contact Klækken to
          book rooms by calling (+47) 321 40 000. For a discount you can state
          that you going to our wedding.
        </p>

        <h2>Children</h2>
        <p>
          We arrange a playroom for the little ones, and they can gladly bring
          one favorite toy or two. All children who want their own children's
          menu must contact us, if not they get a children's version of the
          actual menu. Please contact us if any children / babies need a high
          chair.
        </p>

        <h2>Arrival</h2>
        <p>
          Askeladden Reiser drives busses from Gardermoen to Klækken Hotel.{" "}
          <a
            href="https://askeladden.net/flybuss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The bustable can be read here
          </a>
        </p>

        <h2>Friday, 2nd of August</h2>
        <p>
          At 7 PM there will be arranged a barbeque at Klækken Hotel with an
          after dinner quiz. The dinner is optional and costs 295 NOK per
          person. If the weather allows it, we will be sitting outside, and
          Klækken will set up a bar for us outside.
          <br />
          If you don't want to eat dinner, you can still participate in the
          quiz. Remember then to tick off the RSVP for "entertainment".
        </p>

        <h2>Saturday, 3rd of August</h2>
        <p>
          The wedding ceremony starts at 1 PM in Norderhov Church. The wedding
          reception will be at Klækken Hotel around 4 PM, and the dinner is
          served around 4.30 PM, where a three-course menu will be served.
          <br />
          If you have any allergies, please let us know by writing it in the
          textfield labeled "Allergies" in the RSVP-form, or contact us
          directly. The coffeeguests are invited to 8.30 PM, but are invited to
          the ceremony aswell.
        </p>
      </div>
    );
  }
}

export default WeddingWeekend;
