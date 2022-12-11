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
import Ipspass from '../../src/inputpass';
import Logos from '../../src/logo';
import Btnback from '../../src/btnback';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Ionicons } from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';
const URL = "localhost:3000/login"
let urlpro = `http://10.0.60.97:3000/products`;
let urlpro1 = `http://10.0.60.97:3000/products`;
let urluser = `http://10.0.60.97:3000/user`;

export default function SignInScreen({ navigation }) {
  const [Email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const goToHome = () => {
    if (Email.trim() == '' || !Email) {
      alert('Không được để trống email !');
    } else if (password.trim() == '' || !password) {
      alert('Không được để trống mật khẩu ! ');
      // alert('Không được để trống mật khẩu ! ' + password.trim());
    } else {
      login();
    }
  };
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('iduser', 'test');
    } catch (error) {
      // Error saving data
    }
  };
  const login = async () => {

  try {
    const res = await axios.get(
      `https://apihdnauan.onrender.com/user/${Email.trim()}`
    );
    if (res.data.password == password.trim()) {
      console.log('test:'+res.data.ID);
      await AsyncStorage.setItem('iduser', ''+res.data.ID);
      await AsyncStorage.setItem('iduser1', ''+res.data.Email);
      await AsyncStorage.setItem('iduser2', ''+res.data.Name);
      await AsyncStorage.setItem('iduser3', ''+res.data.Phone);
      navigation.navigate("HomeTab",{screen: 'HomeTab'
        
      });
      
    } else {
      alert(`Email hoặc mật khẩu không chính xác!`);
    }
  } catch (error) {
    console.log(error);
  }
};
const onGoBack = () => {
  navigation.goBack();
};
  const goToSignUp = async () => {
    navigation.navigate('SignUpScreen');
  };
  const checkLogin = async () => {
    let userData = await AsyncStorage.getItem('curUser');
    if (userData) navigation.replace('HomeTab');
  };
  useEffect(() => {
    checkLogin();
  }, []);
  const imagesu = { uri: "https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
  return (
    <View style={styles.container}>
      {/* <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }} >  </Btnback></View> */}
      
      {/* <View style={styles.btnback}><TouchableOpacity onPress={() => { navigation.goBack() }} >
        <Image source={require('../../img/BackMini.png')}></Image>
      </TouchableOpacity></View> */}
      <ImageBackground source={imagesu} style={styles.su} resizeMode="cover">
      <StatusBar barStyle="light-content"/>
      <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 60,
            left: 15,
            width: 40,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
      <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent','black']}
          style={{
            height:550,
            justifyContent: 'center',
            
          }}
          >
        <View style={styles.viewtop}>
        <Text style={styles.titleText}>ĐĂNG NHẬP</Text></View>
      <View style={styles.viewtop1}>
        <Ips placeholder="Tài Khoản" onChangeText={setemail} /></View>
      <View style={styles.viewtop1}>
        <Ipspass Text="Password" placeholder="Mật Khẩu" placeholderTextColor = "white"  onChangeText={setpassword}/></View>
      <View style={styles.btn}>
        <Btns color='#0bcc95' Text='Đăng Nhập' onPress={goToHome}></Btns>
        {/* <Text style={styles.ortext}>OR</Text> */}
        <Btns color='transparent' Text='Quên Mật Khẩu' onPress={() => { navigation.navigate("Forgot") }}></Btns>
        {/* <View style={{margin: 10}}><TouchableOpacity onPress={() => {navigation.push('Forgotpassword') }} style={styles.BtnC}>
        <Text>Forgot Password</Text>
      </TouchableOpacity></View> */}
        </View>
            
            
        </LinearGradient>
        
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

  },
  BtnC:{
    backgroundColor: "#81d3e3",
        paddingHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: "center",
  },
  btnback: {
    alignSelf: 'flex-start',
    marginTop: 20
  },
  titleText: {
    fontSize: 40,
    fontWeight: '400',
    color: 'lightgray',
    paddingHorizontal: 65
  },
  tText: {
    fontSize: 20,


  },
  viewtop: {
    margin: 30,
    
  },
  viewtop1: {
    margin: 8,
    paddingHorizontal: 60,
    
  },
  ortext: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 20,
    alignItems: 'center',
    
  },
  btn: {
    // justifyContent: "center",
    paddingHorizontal: 10,
  },
  su: {
    flex: 1,
    justifyContent: 'center',
    height: 600 ?"83%":"10%"
  }
});


