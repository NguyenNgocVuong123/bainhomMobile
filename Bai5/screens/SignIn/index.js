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
  TouchableOpacity
} from 'react-native';
import Btns from '../../src/btn';
import Ips from '../../src/input';
import Ipspass from '../../src/inputpass';
import Logos from '../../src/logo';
import Btnback from '../../src/btnback';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const URL = "localhost:3000/login"
let urlpro = `http://192.168.0.101:3000/products`;
let urlpro1 = `http://192.168.0.101:3000/products`;
let urluser = `http://192.168.0.101:3000/user`;

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
      `http://192.168.0.101:3000/user/${Email.trim()}`
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
  return (
    <View style={styles.container}>
      <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }} >  </Btnback></View>
      {/* <View style={styles.btnback}><TouchableOpacity onPress={() => { navigation.goBack() }} >
        <Image source={require('../../img/BackMini.png')}></Image>
      </TouchableOpacity></View> */}
      <View style={styles.viewtop}>
        <Text style={styles.titleText}>Sign In</Text></View>
      <View style={styles.viewtop1}>
        <Ips Text="Email" placeholder="TK" onChangeText={setemail} /></View>
      <View style={styles.viewtop1}>
        <Ipspass Text="Password" placeholder="Pass"  onChangeText={setpassword}/></View>
      <View style={styles.btn}>
        <Btns color='#81d3e3' Text='Sign Ip' onPress={goToHome}></Btns>
        {/* <Text style={styles.ortext}>OR</Text> */}
        <Btns color='#81d3e3' Text='Forgot Password' onPress={() => { navigation.navigate("Forgot") }}></Btns>
        {/* <View style={{margin: 10}}><TouchableOpacity onPress={() => {navigation.push('Forgotpassword') }} style={styles.BtnC}>
        <Text>Forgot Password</Text>
      </TouchableOpacity></View> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
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
    fontSize: 50,
    // fontWeight: "bold"
    color: 'blue'

  },
  tText: {
    fontSize: 20,


  },
  viewtop: {
    margin: 50

  },
  viewtop1: {
    margin: 8
  },
  ortext: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 20,
    alignItems: 'center'
  },
  btn: {
    // justifyContent: "center",
    paddingHorizontal: 10,
  }

});


