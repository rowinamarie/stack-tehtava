import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')} // Navigate to the Settings screen
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
});