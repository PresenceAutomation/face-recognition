import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import pick from '../api/picker.js';
import uploadFile from '../api/upload.js';
import post from '../api/findPerson';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource: null,
      data: null,
      name: 'No name'
    }
  }
  render(){
    let img = this.state.avatarSource == null? null:
      <Image
        source={this.state.avatarSource}
        style={{height: 200, width: 200}}
      />
    return (
      <View>
        <Text>{this.state.name}</Text>
        <TouchableOpacity onPress={this.show.bind(this)}>
          <Text>Show Image Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.upload.bind(this)}>
          <Text>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.find('https://khoapham-face.herokuapp.com/tien.png')}>
          <Text>Find</Text>
        </TouchableOpacity>
        {img}
      </View>
    )
  }
  show(){
    pick((source, data) => this.setState({avatarSource: source, data: data}));
  }
  upload(){
    uploadFile([
      { name : 'info', data : 'KhoaPham'},
      { name: 'avatar', filename: 'avatar.png', data: this.state.data }
    ])
    .then(res => res.text())
    .then(imageLink => {
      console.log('LINK', imageLink)
      return this.find(imageLink.replace('\n', ''))
    })
    .then(res => {
      this.setState({...this.state, name: res})
    })
    .catch(err => console.log(err + ''));
  }
  find(imageUrl) {        
        const url = 'https://khoapham-face.herokuapp.com/findByUrl';
        return fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageUrl: imageUrl
          })
        })
        .then(res => res.text())
    }
}
