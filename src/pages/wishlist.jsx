import React, { Component } from "react";

class Wishlist extends Component {
  state = {};
  render() {
    return (
      <div className="pageContainer">
        <h1>Ønskeliste</h1>
        <a
          href="https://www.tilbords.no/bryllup/vis-liste/?wishListId=46822"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tilbords
        </a>
        <br />
        <a
          href="https://www.listfully.no/share/npQ1Aeqssta7sJSoIgUh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vår egen liste
        </a>
      </div>
    );
  }
}

export default Wishlist;
