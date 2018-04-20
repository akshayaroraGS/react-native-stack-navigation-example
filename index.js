import React, { Component } from 'react'
import { AppRegistry, Text, View, TextInput, TouchableOpacity, ToastAndroid, Platform, StyleSheet, ListView, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');
// import MainNavigator from './src/MainNavigator';

import HomeScene from './src/HomeScene'

data = ['HEADER 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'HEADER 2', 'row 2', 'row 2', 'row 2', 'row 2', 'HEADER 3', 'row 2', 'row 2',
    'row 2', 'row 2', 'HEADER 4', 'row 2', 'row 2', 'row 2', 'row 2', 'HEADER 5', 'row 2', 'row 2', 'row 2', 'HEADER 6', 'row 2', 'row 2',
    'row 2', 'row 2', 'HEADER 7', 'row 2', 'row 2', 'row 2', 'row 2', 'HEADER 8', 'row 2', 'row 2', 'row 2', 'row 2', 'HEADER 9', 'row 2',
    'row 2', 'row 2', 'row 2', 'HEADER 10', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'HEADER 11', 'row 2', 'row 2', 'row 2', 'row 2',
    'row 2', 'row 2', 'HEADER 12', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'HEADER 13', 'row 2', 'row 2'];

// create a component
class ThisIsDemoClass extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(data),
            Header: '',
            lastHeader: '',
            lastIndex: -1
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    ref={o => this.listView = o}
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={{ color: 'white', fontSize: 40, width, height: 50, textAlign: 'center', backgroundColor: !rowData.includes('HEADER') ? '#002020' : '#0000ff' }}>{rowData.toUpperCase()}</Text>}
                    onScroll={this.onScroll.bind(this)}
                />
                {!!!this.state.Header || <Text style={{ color: 'white', fontSize: 40, width, height: 50, textAlign: 'center', backgroundColor: '#0000ff', position: 'absolute' }} >{this.state.Header}</Text>}
            </View>
        );
    }

    onScroll(event) {
        index = parseInt(event.nativeEvent.contentOffset.y / 50);
        // console.warn('onScroll = ' + event.nativeEvent.contentOffset.y + "  index = " + index);
        // console.warn('value = ' + this.state.dataSource._dataBlob.s1[index]);
        if (index > 0) {
            if (this.state.lastIndex < index) {
                this.setState({ Header: this.state.dataSource._dataBlob.s1[index].includes('HEADER') ? this.state.dataSource._dataBlob.s1[index] : this.state.Header, lastIndex: index });
            } else {
                let lastHeader = '';
                for (i = this.state.lastIndex; i > 0; i--) {
                    if (this.state.dataSource._dataBlob.s1[i].includes('HEADER')) {
                        lastHeader = this.state.dataSource._dataBlob.s1[i]
                        break;
                    }
                }
                !!!lastHeader || this.setState({ Header: lastHeader, lastIndex: index });
            }
        } else {
            this.setState({ Header: '', lastIndex: index });
        }
    }
}



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a084fa',
    },
});


AppRegistry.registerComponent('AARTI', () => ThisIsDemoClass);
