import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Btns from '../../src/btn';
import Ips from '../../src/input';
import Logos from '../../src/logo';
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LinearGradient} from 'expo-linear-gradient';
export default function LoginScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("iduser1").then((res) => {
        if (res != null) {
          console.log(res);
          // navigation.navigate("HomeTab");

        } else {
          setisLoading(false);
        }
      });
    }, 4500);
  }, [isFocused]);
  const imagebg = { uri: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
  
    return (
    <View style={styles.container}>
      <ImageBackground source={imagebg} style={styles.bg} resizeMode="cover">
      <StatusBar barStyle="light-content"/>
      <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent','black']}
          style={{
            height:450,
            justifyContent: 'flex-end',
            
          }}
          >
            <Text style={{width:"80%", color:'white', fontSize:42, fontWeight: '800', lineHeight:50, paddingLeft:30, marginBottom: 10}}>
              Ôi Bạn Ơi ! {"\n"}Nấu ăn dở là do bạn chưa có công thức đấy !
            </Text>
            <Text style={{width:"70%", color:'gray', fontSize:22, fontWeight: '900', lineHeight:25, paddingLeft:30, marginBottom: 40}}>
              Món gì cũng có ! {"\n"}Không có thì rồi sẽ có !
            </Text>
            
        </LinearGradient>
      <View style={{paddingBottom: 80}}>
      <Btns color="#0bcc95" Text='Đăng Nhập' onPress={() => {navigation.navigate('SignIn') }}  ></Btns>
            <Btns color="transparent" Text='Đăng Kí' onPress={() => {navigation.navigate('SignUp') }}></Btns>
            </View>
      {/* <View style={{margin: 10}}><TouchableOpacity onPress={() => {navigation.navigate('SignInScreen') }} style={styles.BtnC}>
        <Text>Log In</Text>
      </TouchableOpacity></View>
      <View style={{margin: 10}}><TouchableOpacity onPress={() => {navigation.navigate('SignUpScreen') }} style={styles.BtnC}>
        <Text>Sign Up</Text>
      </TouchableOpacity></View> */}
      
      </ImageBackground>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  BtnC:{
    backgroundColor: "#81d3e3",
        paddingHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'blue'

  },
  tText: {
    fontSize: 20,
    margin: 10,

  },
  viewtop: {
    margin: 20,
  },
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 600 
  }
});
