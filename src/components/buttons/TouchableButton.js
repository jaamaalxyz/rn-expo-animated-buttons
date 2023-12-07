import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

const TouchableButton = ({ title, message, style }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert(message)}
      disabled={false}
      activeOpacity={0.6}
      style={[styles.bgColor, style]}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#004600',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
  },
});
