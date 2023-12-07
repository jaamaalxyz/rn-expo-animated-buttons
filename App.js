import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={{
          fontSize: 20,
          color: '#E3E3E3',
          textAlign: 'center',
          paddingHorizontal: 20,
        }}
      >
        New UI with a dark background and lighter text color
      </Text>
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
});
