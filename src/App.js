import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Icon from './components/Icon';
import IconsCache from './components/IconsCache';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Icon type='pin' />
  				<Icon type='star' />
  				<Icon type='pin' />
  				<Icon type='star' />
          <Icon type='pin' />
  				<Icon type='star' />
  				<IconsCache />
        </div>
      </Provider>
    );
  }
}

export default App;
