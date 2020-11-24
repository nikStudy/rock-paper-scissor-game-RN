import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PlayScreen from './src/components/PlayScreen';

export default function App() {
  const [playMode, setPlayMode] = useState(false);

  return playMode ? (
    <PlayScreen />
  ) :  (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={styles.emoji}>✊ ✋ ✌️</Text>
      <View style={styles.btnContainer}>
        <Button onPress={() => setPlayMode(true)} title="Play" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    margin: 10
  },
  emoji: {
    fontSize: 60,
  },
  btnContainer: {
    width: 240,
    marginTop: 60
  },
});
