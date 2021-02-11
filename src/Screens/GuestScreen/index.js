import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import AgeCategories from '../AgeCategories';
import {useNavigation} from '@react-navigation/native'

export default function index() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <AgeCategories
          title="Adults"
          description="Ages 13 or above"
          number={adults}
          changeNumber={setAdults}
        />
        <AgeCategories
          title="Childrens"
          description="Age 2-12"
          number={children}
          changeNumber={setChildren}
        />
        <AgeCategories
          title="Infants"
          description="Under 2"
          number={infants}
          changeNumber={setInfants}
        />
         </View>
        <Pressable
          style={styles.searchButtonContainer}
          onPress={() => navigation.navigate('Home',{
            screen: 'Explore',
            params: {
              screen: 'Posts'
            }
          })}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
     
    </View>
  );
}
