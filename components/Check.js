import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import pick from '../api/picker.js';
import uploadFile from '../api/upload.js';

export default class App extends Component {
  state = {
      avatarSource: null,
      data: null,
      log: 'Upload image to see log.'
  }

  backToMenu() {
        const { navigator } = this.props;
        navigator.pop();
  }

  show() {
    pick((source, data) => this.setState({ avatarSource: source, data }));
  }

  upload() {
    uploadFile([{ name: 'avatar', filename: 'avatar.png', data: this.state.data }])
    .then(res => res.text())
    .then(logInfo => this.setState({ ...this.state, log: logInfo }))
    .catch(err => console.log(`${err} `));
  }

  render() {
    const { avatarSource, log } = this.state;
    const img = avatarSource == null ? null : (
      <Image
          source={avatarSource}
          style={{ height: 200, width: 200 }}
      />
    );
    
    return (
      <View style={style}>
        <TouchableOpacity onPress={this.show.bind(this)}>
          <Text>Show Image Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.upload.bind(this)}>
          <Text>Upload</Text>
        </TouchableOpacity>
        {img}
        <Text>{log}</Text>
        <Button 
            title="Back to Menu"
            onPress={this.backToMenu.bind(this)}
        />
      </View>
    );
  }
}

const style = {
    backgroundColor: '#E7E7E7',
    flex: 1
};
