import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.textOneStyle}>Child #1</Text>
                <Text style={styles.textTwoStyle}>Child #2</Text>
                <Text style={styles.textThreeStyle}>Child #3</Text>
            </View>
            <View style={styles.viewContainerStyle}>
                <View style={styles.viewOneStyle}></View>
                <View style={styles.viewTwoStyle}></View>
                <View style={styles.viewThreeStyle}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject,
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    viewContainerStyle: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewOneStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    viewTwoStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
    },
    viewThreeStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    }
});

export default BoxScreen;