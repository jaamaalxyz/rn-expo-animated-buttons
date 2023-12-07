import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  PressableButton,
  SimpleButton,
  TouchableButton,
} from '../components/buttons';
import { VerticalSpacer } from '../components/spacer';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SimpleButton
        title={'Simple Button!'}
        message={'Simple button pressed!'}
        style={styles.wrapper}
      />
      <VerticalSpacer />
      <TouchableButton
        title={'Touchable Button'}
        message={'Touchable button pressed!'}
        style={styles.wrapper}
      />
      <VerticalSpacer />
      <PressableButton
        title={'Pressable Button'}
        message={'Pressable button pressed!'}
        style={styles.wrapper}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
