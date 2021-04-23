/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [name, setName] = useState('Ho');
  const [age, setAge] = useState('27');

  return (
    <View style={styles.Container}>
      <Text>Enter your name : </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={value => setName(value)}
      />
      <Text>Enter your age : </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 20"
        onChangeText={value => setAge(value)}
      />

      <Text>
        My name is {name} and my age is {age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="updat state" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  // boldText: {
  //   fontWeight: 'bold',
  // },
  // body: {
  //   backgroundColor: 'yellow',
  //   padding: 20,
  //   fontWeight: 'bold',
  // },
});

export default App;
