import React from 'react';
import { Text, View } from 'react-native';
import styles from './TodoCard.style';

const TodoCard = ({ item }: { item: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default TodoCard;
