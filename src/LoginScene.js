//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import App from './TemplateScene';

// create a component
class LoginScene extends Component {

    _onPress() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <App name="LoginScene" onPress={this._onPress.bind(this)} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default LoginScene;
