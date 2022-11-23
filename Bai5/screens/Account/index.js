import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image ,TextInput} from "react-native";
import axios from 'axios';
import MainButton from "../../src/components/MainButton";
import Ips from "../../src/input";
export default function Accont({ navigation }) {

    const value =  AsyncStorage.getItem('iduser1'); 
    const [user, setuser] = useState('');
    const [userName, setuserName] = useState('');
    const [userPhone, setuserPhone] = useState('');

    useEffect(()=>{
      AsyncStorage.getItem('iduser1').then(result => {
        setuser(result);
        console.log(result);
      })
    }, []);
    useEffect(()=>{
      AsyncStorage.getItem('iduser2').then(result => {
        setuserName(result);
        console.log(result);
      })
    }, []);
    useEffect(()=>{
      AsyncStorage.getItem('iduser3').then(result => {
        setuserPhone(result);
        console.log(result);
      })
    }, []);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        paddingTop: StatusBar.currentHeight + 30,
        paddingHorizontal: 12,
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
          }}
          source={{ uri: "https://i.pravatar.cc/300" }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Tên
        </Text>
        <TextInput  style={{padding: 10, height: 40,width:250, borderColor: 'gray', borderWidth: 1,borderRadius: 10 }} value={userName} ></TextInput>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Email
        </Text>
        <TextInput  style={{padding: 10, height: 40,width:250, borderColor: 'gray', borderWidth: 1,borderRadius: 10 }} value={user} ></TextInput>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Phone
        </Text>
        <TextInput  style={{padding: 10, height: 40,width:250, borderColor: 'gray', borderWidth: 1,borderRadius: 10 }} value={userPhone} keyboardType="numeric"></TextInput>
        
      </View>
      
      <MainButton
        
        style={{ backgroundColor: "red", marginBottom: 10 }}
        title={"Sửa Thông Tin"}
        
      />
      <MainButton
        
        style={{ backgroundColor: "red", marginBottom: 10 }}
        title={"Đổi Mật Khẩu"}
      />
      <MainButton
        
        style={{ backgroundColor: "red", marginBottom: 100 }}
        title={"Đăng Xuất"}
      />
    </View>
  );
}
