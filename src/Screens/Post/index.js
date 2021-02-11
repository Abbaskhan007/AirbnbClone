import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';

export default function Post({item}) {
    const {image,type,bed,bedroom,title,oldPrice,newPrice,totalPrice} = item;
    console.log('image:',image)
    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.description}>{bed} bed {bedroom} bedroom</Text>
            <Text style={styles.details} numberOfLines={2}>{title}</Text>
            <View style={styles.prices}>
            <Text style={styles.oldPrice}>${oldPrice} </Text>
            <Text style={styles.newPrice}> ${newPrice} / Night</Text>
            </View>
            <Text style={styles.totalPrice}>${totalPrice} total</Text>
        </View>
    )
}
