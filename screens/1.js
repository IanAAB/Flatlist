import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Register Manager"
        onPress={() => navigation.navigate('2')}
        color="#6495ED"
        style={styles.button}
      />
      <Button
        title="Registered Players"
        onPress={() => navigation.navigate('3')}
        color="#6495ED"

        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    marginBottom: 20,
  },
});

export default screen1;
