import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function AgeCategories(props) {
  const {title, description, number, changeNumber} = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.ageTitle}>{title}</Text>
        <Text style={styles.ageDescription}>{description}</Text>
      </View>
      <View style={styles.numberContainer}>
       
          <EvilIcons
            name="minus"
            size={35}
            onPress={() => changeNumber(Math.max(0,number - 1))}
          />
        <Text style={styles.number}>
          {number}
        </Text>
        <EvilIcons
          name="plus"
          size={35}
          onPress={() => changeNumber(number + 1)}
        />
      </View>
    </View>
    
  );
}
