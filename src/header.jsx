import React from "react";
import { Link } from 'react-dom-route'

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>teste</h1>
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
