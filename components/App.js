import React, { Component } from 'react';
import { Navigator, WebView } from 'react-native';

import Menu from './Menu';
import Check from './Check';
import List from './List';
import AddEmployee from './AddEmployee';

const renderScene = (route, navigator) => {
    switch (route.name) {
        case 'MENU': return <Menu navigator={navigator} />;
        case 'CHECK': return <Check navigator={navigator} />;
        case 'LIST': return <List navigator={navigator} />;
        case 'ADD': return <AddEmployee navigator={navigator} />;
        default: return <Menu navigator={navigator} />;
    }
};

export default class Nav extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://iokpt.herokuapp.com' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}
