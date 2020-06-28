import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello, Maaans!</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#036',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    color: '#f0f0f0',
  },
});
