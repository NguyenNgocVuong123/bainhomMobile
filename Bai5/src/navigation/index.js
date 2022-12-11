import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../../screens/login";
import SignInScreen from "../../screens/SignIn";
import SignUpScreen from "../../screens/SignUP";
import ForgotPassword from "../../screens/ForgotPassword";
import HomeScreen from "../../screens/Home";
import DrinkDetailScreen from "../../screens/drinkDetail";
import HomeTab from "./homeTab";
import NewProductScreen from "../../screens/newproduct";
import Accont from "../../screens/Account"; 
import Search from "../../screens/Search";
import CategoryX from "../../screens/category";
import ImagePickerExample from "../../screens/newproduct2/newpro";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name='Categoryfood' component={CategoryX} />
        <Stack.Screen name='Newimga' component={ImagePickerExample} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="newproduct" component={NewProductScreen} />
        <Stack.Screen name="Acc" component={Accont} />
        <Stack.Screen name="searchfood" component={Search} />
        
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="DrinkDetailScreen" component={DrinkDetailScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default AppNavigation;
