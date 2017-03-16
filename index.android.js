import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/App.js';

export default class DemoUpload extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('DemoUpload', () => DemoUpload);
