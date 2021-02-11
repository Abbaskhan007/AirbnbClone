import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GuestScreen from '../Screens/GuestScreen';
import feed from '../Screens/SearchScreen';
import HomeScreen from '../Screens/Home';
import SearchResultTabNavigator from './SearchResultTabNavigator'

const Stack = createStackNavigator();

const ExploreNavigation = () => {
    return (
         <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Posts" component={SearchResultTabNavigator} />
        </Stack.Navigator>
    );
  };
  
  export default ExploreNavigation;
  