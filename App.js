import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
      <View style={{ marginVertical: 10 }} />
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Touchable button pressed!');
        }}
        disabled={false}
        activeOpacity={0.6}
        style={[styles.wrapper, styles.touchableButton]}
      >
        <Text style={styles.textStyle}>Touchable Button</Text>
      </TouchableOpacity>
      <View style={{ marginVertical: 10 }} />
      <Pressable
        onPress={() => {
          Alert.alert('Pressable button pressed!');
        }}
      >
        {({ pressed }) => (
          <View
            style={[
              styles.wrapper,
              { backgroundColor: pressed ? '#0476a0' : '#1146aa' },
            ]}
          >
            <Text
              style={[
                styles.textStyle,
                { color: pressed ? '#fafafa' : '#aaffaa' },
              ]}
            >
              Pressable Button
            </Text>
          </View>
        )}
      </Pressable>
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
  touchableButton: {
    backgroundColor: '#004600',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
  },
});
