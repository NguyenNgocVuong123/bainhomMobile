import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../../screens/Home';
import { Entypo } from '@expo/vector-icons';
import favScreen from '../../screens/fav';
import MyTabBar from '../components/TabBar';
import Accont from '../../screens/Account';
import NewProductScreen from '../../screens/newproduct';
import CategoryX from '../../screens/category';
// import SearchScreen from '../screens/search';
// import ProfileScreen from '../screens/profile';
const Tab = createBottomTabNavigator();

export default function HomeTab({route}) {
  const { Name, Email, Phone} = route.params;
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='categoryfood' component={CategoryX} />
      <Tab.Screen name='newpro' component={NewProductScreen} />
      <Tab.Screen name='favScreen' component={favScreen} />
      <Tab.Screen name='Acc' component={Accont} />
    </Tab.Navigator>
  );
}
