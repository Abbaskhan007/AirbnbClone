import React from 'react';
import {View, Text} from 'react-native';

import {Marker} from 'react-native-maps';

export default function CustomMarker({coordinate, newPrice, selectedId, id, onPress}) {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: selectedId === id ? 'black' : 'white',
          padding: 5,
          borderRadius: 10,
          borderColor: 'gray',
          borderWidth: 1,

        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold',color: selectedId === id ? 'white' : 'black'}}>{newPrice}</Text>
      </View>
    </Marker>
  );
}
