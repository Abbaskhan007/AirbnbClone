import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GuestScreen from '../Screens/GuestScreen';
import DestinationSearch from '../Screens/DestinationSearch';
import TabRouter from './TabRouter';
import feed from '../Screens/SearchScreen';
import PostScreen from '../Screens/PostScreen';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabRouter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search your destination"
          component={DestinationSearch}
        />
        <Stack.Screen name="How many people?" component={GuestScreen} />
        <Stack.Screen name='Post Details' component={PostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
