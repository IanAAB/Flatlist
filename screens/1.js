import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Agendar Consulta"
        onPress={() => navigation.navigate('2')}
        color="#6495ED"
        style={styles.button}
      />
      <Button
        title="Consultar Pacientes Agendados"
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

export default Home;
