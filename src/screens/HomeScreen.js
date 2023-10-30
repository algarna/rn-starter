import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        title="Go to Components Demo"  
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo"  
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Demo"  
        onPress={() => navigation.navigate('Image')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
