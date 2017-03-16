import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Employee extends Component {
    render() {
        const { image, name } = this.props.info;
        return (
            <View style={style}>
                <Text>{name}</Text>
                <Image 
                    style={imageStyle}
                    source={{ uri: `https://groupkhoapham.herokuapp.com/${image}` }}
                />
            </View>
        );
    }
}

const style = {
    height: 200,
    backgroundColor: '#B5C6CD',
    marginVertical: 10,
    padding: 10
};

const imageStyle = {
    height: 200,
    width: 80
};
