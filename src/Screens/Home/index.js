import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Styles from './Styles';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
export default function index() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable style={Styles.searchButton} onPress={()=>navigation.navigate('Search your destination')}>
          <Fontisto style={Styles.searchIcon} name='search' size={25} color={"#f15454"}/>
        <Text style={Styles.buttonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/Images/wallpaper.jpg')}
        style={Styles.backgroundImage}>
        <Text style={Styles.title}>Go Near</Text>
        <Pressable style={Styles.button}>
          <Text style={Styles.buttonText}>Explore Nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
