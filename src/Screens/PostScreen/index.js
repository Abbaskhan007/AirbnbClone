import React from 'react'
import { View, Text, Image } from 'react-native'
import feed from '../../../assets/Data/feed';
import styles from './styles';
import {useRoute} from '@react-navigation/native'

export default function Post() {
    const route = useRoute();
    const post = feed.find(place=> place.id === route.params.id)
    const {image,bed,bedroom,title,oldPrice,newPrice,totalPrice} = post;

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
