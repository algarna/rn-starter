import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={styles.label} >Enter your name: </Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            {name.length > 0 && <Text>Your name is {name}</Text>}
            
            <Text style={styles.label} >Enter Password: </Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            {password.length > 0 && password.length <= 5 && <Text>Password must be longer than 5 characters</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    label: {
        marginTop: 15,
        fontSize: 20,
    }
});

export default TextScreen;