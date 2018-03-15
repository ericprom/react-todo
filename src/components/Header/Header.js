import React from 'react';
import logo from './../../img/logo.svg';
class Header extends React.Component {
  render() {
    return (
        <div>
          <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Eric's todos</h1>
	        </header>
        </div>
    );
  }
}

export default Header;