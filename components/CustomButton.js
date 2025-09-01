//import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Button } from "react-native";
//, View

const CustomButton = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={styles.text}>{title}</Text>
      <Button style={styles.button}>Test</Button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default CustomButton;
