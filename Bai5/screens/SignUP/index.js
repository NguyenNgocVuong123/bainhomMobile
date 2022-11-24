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
import React, { useState } from 'react'
import Btns from '../../src/btn';
import Ips from '../../src/input';
import Ipspass from '../../src/inputpass';
import Logos from '../../src/logo';
import axios from "axios";
import Btnback from '../../src/btnback';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignInScreen({ navigation }) {
  const [Email, setemail] = useState("");
  const [Name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [Phone, setphone] = useState("");
<<<<<<< HEAD
  const url = "http://192.168.1.122:3000";
=======
  const url = "http://192.168.0.101:3000";
>>>>>>> d494c01fbbd502d3e122368a328a857442fb1fef

  const onGoBack = () => {
    navigation.goBack();
  };
  const onSignUp = () => {
    if (Name.trim() == "" || !Name) {
      alert("Không được để trống họ và tên !");
    } else if (Email.trim() == "" || !Email) {
      alert("Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      alert("Không được để trống mật khẩu !");
    } else if (Phone.trim() == "" || !Phone) {
      alert("Không được để trống số điện thoại !")
    } else {
      createAccount();
    }
  };
  const createAccount = async () => {
    try {
      const res = await axios.get(`${url}/user/${Email.trim()}`);
      if (res.data.Email == Email.trim()) {
        alert("Email đã được đăng ký!");
        return;
      } else {
        const res = await axios.post(`${url}/user/`, {
        Name: Name.trim(),
        Email: Email.trim(),
        password: password.trim(),
        Phone: Phone.trim(),
        });
        alert("Đăng ký thành công!");
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <View style={styles.container}>
      {/* <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }}></Btnback></View> */}
      <View style={styles.btnback}><TouchableOpacity onPress={() => { navigation.goBack() }} >
        <Image source={require('../../img/BackMini.png')}></Image>
      </TouchableOpacity></View>
      <Text style={styles.titleText}>Create new account</Text>
      <View style={styles.viewtop1}>
        <Ips Text="Name" placeholder="Full Name" onChangeText={setname} /></View>
      <View style={styles.viewtop1}>
        <Ips Text="Phone" placeholder="Phone Number" onChangeText={setphone} /></View>
      <View style={styles.viewtop1}>
        <Ips Text="Email" placeholder="Email" onChangeText={setemail} /></View>
      <View style={styles.viewtop1}>
        <Ipspass Text="Password" placeholder="Pass" onChangeText={setpassword} /></View>
      <Btns color='#81d3e3' Text='Sign Up' onPress={onSignUp}></Btns>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: 'blue',
    margin: 20

  },
  viewtop: {
    margin: 50

  },
  viewtop1: {
    margin: 10
  },
  btnback: {
    alignSelf: 'flex-start',
    marginTop: 20
  },
});

