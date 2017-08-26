import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';
import settingsIcon from './icons/settings_white.svg'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="overall">
          <p className="sum-and-period">{this.props.money} ₽ на 7 дней</p>
          <a href="#" className="setings">
            <img src={settingsIcon} alt="settings icon" className="settings-icon" />
          </a>
        </div>
        <div className="today">
          <p className="today-sum">141₽</p>
          <p className="hint-txt">На сегодня</p>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  const {account: {money}} = state
  return {
    money
  }
}

export default connect(stateToProps)(App);
