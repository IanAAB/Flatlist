import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

function screen2() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [experience, setExperience] = useState('');

  const cadastrarTécnico = () => {
    const dadosTécnico = {
      name,
      age,
      country,
      experience,
    };
    console.log('Dados do Técnico:', dadosTécnico);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.inp1}
      />
      <TextInput 
      placeholder="Age" 
      value={age} onChangeText={setAge} 
      style={styles.inp2}/>
      <TextInput
        placeholder="Place of birth"
        value={country}
        onChangeText={setCountry}
        style={styles.inp3}
      />
      <TextInput placeholder="Years of experience " 
      value={experience} 
      onChangeText={setExperience} 
      style={styles.inp4}/>
      <Button title="Register" onPress={cadastrarTécnico} color="#6495ED"
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
  inp1: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "#A9A9A9"
  },
  inp2: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "#A9A9A9"
  },
  inp3: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "#A9A9A9"
  },
  inp4: {
    marginBottom: 20,
    height: 50,
    backgroundColor: "#A9A9A9"
  } 
});

export default screen2;