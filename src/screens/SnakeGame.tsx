// SnakeGame.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const CELL_SIZE = 20;

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });

  useEffect(() => {
    const interval = setInterval(() => {
      // Game logic goes here
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handlePress = (x: number, y: number) => {
    // Handle touch events to control the snake
  };

  return (
    <View style={styles.container}>
      {/* Render snake and food */}
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => handlePress(0, 0)} // Example coordinates
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  touchable: {
    width: '100%',
    height: '100%',
  },
});

export default SnakeGame;
