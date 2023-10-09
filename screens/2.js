import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function Agendamento() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');

  const agendarConsulta = () => {
    const dadosPaciente = {
      nome,
      cpf,
      dataNascimento,
      endereco,
    };

    console.log('Dados do Paciente:', dadosPaciente);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
        style={styles.inp1}
      />
      <TextInput 
      placeholder="CPF" 
      value={cpf} onChangeText={setCpf} 
      style={styles.inp2}/>
      <TextInput
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        style={styles.inp3}
      />
      <TextInput placeholder="Endereço" 
      value={endereco} 
      onChangeText={setEndereco} 
      style={styles.inp4}/>
      <Button title="Agendar" onPress={agendarConsulta} color="#6495ED"
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
  },
});

export default Agendamento;