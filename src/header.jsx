import React from "react";
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Rick and Morty</h1>
        <Link to="/characters">
          <p>characters</p>
        </Link>
        <Link to="/episodes">
          <p>episodes</p>
        </Link>
        <Link to="/about">
          <p>about</p>
        </Link>
      </>
    );
  }
}

export default Header;
