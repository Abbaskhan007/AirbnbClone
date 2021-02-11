import React from 'react';
import {View, Text, FlatList, TextInput, Pressable} from 'react-native';
import searchList from '../../../assets/Data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

export default function index() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          styles={{
            textInput: styles.searchText,
          }}
          onPress={(data, details = null) => {
            navigation.navigate('How many people?')
          }}
          query={{
            key: 'AIzaSyAq_p-qa9mTOCaLeA4JuBMvfUClgHGjU8s',
            language: 'en',
            types: '(cities)'
          }}
          fetchDetails
          renderRow = {item=> <SuggestionRow item={item}/>}
          suppressDefaultStyles
        />
      </View>

  );
}
