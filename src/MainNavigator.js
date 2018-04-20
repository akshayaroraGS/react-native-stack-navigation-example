//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScene from './SplashScene';

import LoginScene from './LoginScene';
import HomeScene from './HomeScene';

const RootNavigator = StackNavigator({
    Login: { screen: LoginScene },
    Home: { screen: HomeScene }
});

// create a component
export default class MainNavigator extends Component {
    state = { showSplash: true };
    constructor(props) {
        super(props);
        setTimeout(() => { this.setState({ showSplash: false }) }, 3000);
    }

    render() {
        return this.state.showSplash ?
            (
                <SplashScene />
            )
            : (
                <RootNavigator />
            );
    }
}



