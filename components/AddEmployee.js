import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AddEmployee extends Component {
    backToMenu() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={style}>
                <Text>AddEmployee</Text>
                <Button 
                    title="Back to Menu"
                    onPress={this.backToMenu.bind(this)}
                />
            </View>
        );
    }
}

const style = {
    flex: 1,
    backgroundColor: '#6082CC'
};
