import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const footballPlayers = [
  {
    id: 1,
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
  },
  {
    id: 2,
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
  },
  {
    id: 3,
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
  },
  {
    id: 5,
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
  },
  {
    id: 6,
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
  },
  {
    id: 7,
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
  },
  {
    id: 8,
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
  },
  {
    id: 9,
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
  },
  {
    id: 10,
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
  }
];

function screen3() {
  return (
    <View style={styles.container}>
      <FlatList
        data={footballPlayers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Position: {item.position}</Text>
            <Text>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default screen3;