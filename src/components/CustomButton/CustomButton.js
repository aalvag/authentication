import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'primary', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : null,
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : null,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    padding: 15,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
  container_primary: {
    backgroundColor: '#00f',
  },
  container_secondary: {
    backgroundColor: '#0f0',
  },
  container_terciary: {},
  text_primary: {
    color: '#fff',
  },
  text_secondary: {
    color: '#000',
  },
  text_terciary: {
    color: 'gray',
  },
});
