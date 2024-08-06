// Home.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Snake Game!</Text>
      <Text style={styles.info}>
        The Snake Game is a classic arcade game where you control a snake to eat food
        and grow longer. Avoid running into the walls or yourself!
      </Text>
      <Button
        title="Play"
        onPress={() => navigation.navigate('SnakeGame')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    marginVertical: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
