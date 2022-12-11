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
  ImageBackground
} from 'react-native';
import React, { useState } from 'react'
import Btns from '../../src/btn';
import Ips from '../../src/input';
import Ipspass from '../../src/inputpass';
import Logos from '../../src/logo';
import axios from "axios";
import Btnback from '../../src/btnback';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';
export default function SignInScreen({ navigation }) {
  const [Email, setemail] = useState("");
  const [Name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [Phone, setphone] = useState("");
  const url = "https://apihdnauan.onrender.com";

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
  const imagesu = { uri: "https://images.pexels.com/photos/3648979/pexels-photo-3648979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
  return (
    <View style={styles.container}>
      {/* <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }}></Btnback></View> */}
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
      <Text style={styles.titleText}>ĐĂNG KÍ</Text>
      <View style={{marginTop:30}}>
      <View style={styles.viewtop1}>
        <Ips placeholder="Họ và Tên" onChangeText={setname} /></View>
      <View style={styles.viewtop1}>
        <Ips placeholder="Số Điện Thoại" onChangeText={setphone} /></View>
      <View style={styles.viewtop1}>
        <Ips placeholder="Email" onChangeText={setemail} /></View>
      <View style={styles.viewtop1}>
        <Ipspass Text="Password" placeholder="Mật Khẩu" onChangeText={setpassword} /></View>
      <Btns color='#0bcc95' Text='Sign Up' onPress={onSignUp}></Btns>
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
  },
  titleText: {
    fontSize: 40,
    fontWeight: '400',
    color: 'lightgray',
    paddingHorizontal: 70,
    marginHorizontal: 53
  },
  viewtop: {
    margin: 30

  },
  viewtop1: {
      margin: 8,
      paddingHorizontal: 60,
  },
  btnback: {
    alignSelf: 'flex-start',
    marginTop: 20
  },
  su: {
    flex: 1,
    justifyContent: 'center',
    height: 600 ?"80%":"60%"
  }
  
});

