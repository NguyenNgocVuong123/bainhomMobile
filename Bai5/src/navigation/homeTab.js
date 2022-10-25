import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../../screens/Home';
import { Entypo } from '@expo/vector-icons';
import favScreen from '../../screens/fav';
import MyTabBar from '../components/TabBar';
// import SearchScreen from '../screens/search';
// import ProfileScreen from '../screens/profile';
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      {/* <Tab.Screen name='SearchScreen' component={SearchScreen} /> */}
      <Tab.Screen name='favScreen' component={favScreen} />
      {/* <Tab.Screen name='Profile' component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
