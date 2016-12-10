import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { findIndex } from 'lodash';

import store from './store';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import Icon from './components/Icon';
import IconsCache from './components/IconsCache';

/* eslint-disable no-unused-vars */
import styles from './App.css';

class App extends Component {

  state = {
    icons: []
  }

  onButtonPress(type, remove = false) {
    this.setState((prevState) => {

      if(remove) {
        delete prevState.icons[findIndex(prevState.icons, { type })];
      } else {
        prevState.icons.push({ type });
      }

      return prevState;
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <AppBar
            title='React SVG Cache'
          />

          <Icon type='pin' width={200} svgStyle={{
            fill: '#D80068'
          }} />

          {/*
          <Icon type='pin' width={50} />
          <Icon type='pin' width={50} />
          <Icon type='pin' width={50} style={{
            fill: 'blue'
          }} />
          */}

          {this.state.icons.map((icon, index) => {
            return <Icon type={icon.type} key={index} />
          })}

          <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: 10,
            backgroundColor: '#1FBCD2',
            display: 'flex'
          }}>
            <RaisedButton onClick={this.onButtonPress.bind(this, 'pin', false)} style={{ margin: '0 5px' }}>Add Pin</RaisedButton>
            <RaisedButton onClick={this.onButtonPress.bind(this, 'star', false)} style={{ margin: '0 5px' }}>Add Star</RaisedButton>
            <RaisedButton onClick={this.onButtonPress.bind(this, 'pin', true)} style={{ margin: '0 5px' }}>Remove Pin</RaisedButton>
            <RaisedButton onClick={this.onButtonPress.bind(this, 'star', true)} style={{ margin: '0 5px' }}>Remove Star</RaisedButton>
          </div>
  				<IconsCache />
        </div>
      </Provider>
    );
  }
}

export default App;
