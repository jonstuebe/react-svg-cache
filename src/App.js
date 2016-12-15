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

          <Icon
            type='pin'
            width={50}
          />

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

  				<IconsCache>
            <svg name='pin' width="50" height="50" viewBox="0 0 20 20">
              <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
            </svg>
            <svg name='star' width="50" height="50" viewBox="0 0 20 20">
              <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
            </svg>
            <svg name='circle' width="200" height="200" viewBox="0 0 220 220">
              <circle cx="110" cy="110" r="100" />
            </svg>
            <svg name='rectangle' width="100" height="100" viewBox="0 0 120 120">
              <rect x="10" y="10" width="100" height="100"></rect>
            </svg>
          </IconsCache>
        </div>
      </Provider>
    );
  }
}

export default App;
