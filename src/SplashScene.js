//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default class SplashScene extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.centerTextStyle}>SplashScene</Text>
            </View>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

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
    centerTextStyle: {
        color: 'white'
    }
});
