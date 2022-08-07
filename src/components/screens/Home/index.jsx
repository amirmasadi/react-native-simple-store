import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';

export default function Home() {
  return (
    <ScrollView style={styles.body}>
      <Text style={styles.text}>Home </Text>
    </ScrollView>
  );
}
