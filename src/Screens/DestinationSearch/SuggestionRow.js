import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';


export default function SuggestionRow({item}) {
  return (
    <View style={styles.listContainer}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={35} />
      </View>
      <Text>{item.description}</Text>
    </View>
  );
}
