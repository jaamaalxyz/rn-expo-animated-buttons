import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.wrapper, styles.simpleButton]}>
        <Button
          title="Simple Button!"
          onPress={() => {
            Alert.alert('Simple button pressed!');
          }}
          color={'#EEDFEE'}
        />
      </View>
    </View>
  );
}

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
  simpleButton: {
    backgroundColor: '#988EAA',
  },
});
