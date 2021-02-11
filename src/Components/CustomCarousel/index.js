import React from 'react';
import {View, Text, Image,useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Post({item}) {
  const {image, bed, bedroom, title, oldPrice, newPrice,id} = item;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  return (
    <Pressable onPress={()=>navigation.navigate('Post Details',{id})} style={[styles.container,{width:width-70}]}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.detailsSection}>
        <Text style={styles.description}>
          {bed} bed {bedroom} bedroom
        </Text>
        <Text style={styles.details} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.prices}>
          <Text style={styles.oldPrice}>${oldPrice} </Text>
          <Text style={styles.newPrice}> ${newPrice} / Night</Text>
        </View>
      </View>
    </Pressable>
  );
}
