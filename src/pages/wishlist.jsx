import React, { Component } from "react";

class Wishlist extends Component {
  state = {};
  render() {
    return (
      <div className="pageContainer">
        <h1>Ønskeliste</h1>

        <a
          className="wishlistLink"
          href="https://www.tilbords.no/bryllup/vis-liste/?wishListId=46822"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tilbords
        </a>

        <br />
        <br />
        <a
          className="wishlistLink"
          href="https://www.listfully.no/share/npQ1Aeqssta7sJSoIgUh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Øvrige ønsker
        </a>
      </div>
    );
  }
}

export default Wishlist;
