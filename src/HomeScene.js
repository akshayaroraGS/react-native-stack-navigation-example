//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image } from 'react-native';
import App from './TemplateScene';

// create a component
class MyClass extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        const arr = [];
        for (let i = 0; i <= 100; i++) { arr.push(i); }
        this.state = {
            dataSource: ds.cloneWithRows(arr)
        };
    }

    render() {
        return (
            <ListView style={{ backgroundColor: '#F5FCFF' }} dataSource={this.state.dataSource} renderRow={rowData => { return <Text style={{ color: 'black', fontSize: 20, backgroundColor: '#80F5FCFF', textAlign: 'center' }}> Data {rowData}</Text> }} />
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
export default MyClass;

