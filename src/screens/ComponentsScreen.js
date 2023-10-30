import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Albert';

    return (
        <View>
            <Text style={styles.h1TextStyle}>Getting started with React Native!</Text>
            <Text style={styles.h2TextStyle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    h1TextStyle: {
        fontSize: 45
    },
    h2TextStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;