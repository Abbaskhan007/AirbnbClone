import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import feed from '../../../assets/Data/feed';
import CustomMarker from '../../Components/Marker';
import CustomCarousel from '../../Components/CustomCarousel';

export default function index() {
  const [selectedId, setSelectedId] = useState('');
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChange = useRef( ({viewableItems})=>{
    if(viewableItems.length>0){
      setSelectedId(viewableItems[0].item.id)
    }
  })
  
  useEffect(()=>{
    if(!selectedId) return;
    const index = feed.findIndex(item => item.id === selectedId)
    console.log('Index',index)
    flatlist.current.scrollToIndex({index})
    const place = feed[index];
    const region = {
      latitude: place.coordinate.latitude,
      longitude: place.coordinate.longitude,
      longitudeDelta: 0.8,
      latitudeDelta: 0.8
    };
    map.current.animateToRegion(region)
  },[selectedId])
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        ref= {map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {feed.map((place) => (
          <CustomMarker
            key={place.id}
            coordinate={place.coordinate}
            newPrice={place.newPrice}
            selectedId={selectedId}
            id={place.id}
            onPress={() => setSelectedId(place.id)}
          />
        ))}
      </MapView>

      <FlatList
        ref = {flatlist}
        style={{position: 'absolute', bottom: 20, margin: 8}}
        data={feed}
        renderItem={({item}) => <CustomCarousel item={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval= {width-70}
        snapToAlignment= {'center'}
        decelerationRate= {'fast'}
        onViewableItemsChanged = {onViewChange.current}
        viewabilityConfig={viewConfig.current}
      />
    </View>
  );
}
