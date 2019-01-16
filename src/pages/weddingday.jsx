import React, { Component } from "react";

class Weddingday extends Component {
  state = {};
  render() {
    return (
      <div className="pageContainer">
        <h1>Hotell</h1>
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

        <h1>Barn</h1>
        <p>
          Vi ordner lekerom for de minste, og de kan gjerne ta med en
          favorittleke eller to. Alle barn som vil ha egen barnemeny må kontakte
          oss, hvis ikke får de en barneversjon av den egentlige menyen. Ta også
          kontakt hvis noen barn/babyer trenger barnestol.
        </p>

        <h1>Ankomst</h1>
        <p>
          Askeladden Reiser kjører buss fra Gardermoen til Klækken Hotell.
          <br />{" "}
          <a
            href="https://askeladden.net/flybuss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rutetabellen kan leses her
          </a>
        </p>

        <h1>Fredag 02. August</h1>
        <p>
          Kl 19.00 arrangeres det grillkveld på Klækken Hotell med quiz etter
          middagen. Middagen er valgfri og koster 295,- per person. Hvis det er
          fint vær sitter vi ute, og Klækken stiller da opp med bar ute for oss.
          <br />
          Dersom du ikke ønsker å spise middag kan du allikevel være med på
          quizen. Husk da å huk av for underholdning i RSVP.
        </p>

        <h1>Lørdag 03. August</h1>
        <p>
          Kl 13.00 gifter vi oss i Norderhov Kirke. Bryllupsmottakelsen vil være
          på Klækken Hotell ca kl 16.00, og vi går til bords rundt kl 16.30 hvor
          det blir servert treretters meny.
          <br />
          Alle med allergier må si ifra ved å skrive det under "Alleriger" i
          RSVP, eller kontakte oss direkte. Kaffegjestene er invitert til kl
          20.30, men må gjerne komme i vielsen også.
        </p>
      </div>
    );
  }
}

export default Weddingday;
