import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image ,TextInput,StyleSheet,TouchableOpacity} from "react-native";
import axios from 'axios';
import MainButton from "../../src/components/MainButton";
import Ips from "../../src/input";
export default function Accont({ navigation }) {

    const value =  AsyncStorage.getItem('iduser1'); 
    const [user, setuser] = useState('');
    const [userName, setuserName] = useState('');
    const [userPhone, setuserPhone] = useState('');
    const DangXuat = () => {
      AsyncStorage.clear();
      navigation.replace("SignIn");
    };
    const ChangeAccount = async () => {
      try {
        const res = await axios.get(`${url}/users/email/${useremail.trim()}`);
  
        if (useremail.trim() != doiemail.trim() && res.data != "") {
          alert("Email đã được đăng ký!");
          setuseremail(doiemail.trim());
          return;
        } else {
          const res = await axios.put(`${url}/users/${user}`, {
            name: userName.trim(),
            email: user.trim(),
            phone: userPhone.trim(),
            
          });
          alert("Cập nhật thành công!");
          AsyncStorage.setItem("nameuser", userName.trim());
          AsyncStorage.setItem("emailuser", user.trim());
          AsyncStorage.setItem("phoneuser", userPhone.trim());
          
          //navigation.navigate("Profile");
        }
      } catch (error) {
        console.log(error);
      }
    };
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
      <View style={styles.main}>
        <View style={styles.profile_show}>
          <View style={styles.profile_show_image}>
            <Image
              style={styles.img}
              source={require("../../assets/profile.png")}
            />
          </View>
          <Text style={styles.text_name}>{userName}</Text>
          <Text style={styles.text_info}>Điền thông tin để chỉnh sửa</Text>
        </View>
        <View style={styles.profile_edit}>
          <View style={styles.profile_edit_input}>
            <Image source={require("../../assets/iconuser.png")} />
            <TextInput
              value={userName}
              style={styles.profile_edit_textinput}
              onChangeText={setuserName}
            />
          </View>
          <View style={styles.profile_edit_input}>
            <Image source={require("../../assets/iconemail.png")} />
            <TextInput
              value={user}
              onChangeText={setuser}
              style={styles.profile_edit_textinput}
            />
          </View>
          <View style={styles.profile_edit_input}>
            <Image source={require("../../assets/iconphone.png")} />
            <TextInput
              value={userPhone}
              onChangeText={setuserPhone}
              style={styles.profile_edit_textinput}
            />
          </View>
          
          
          <TouchableOpacity style={styles.btnLogout} onPress={DangXuat}>
            <Image source={require("../../assets/icondangxuat.png")} />
            <Text style={styles.textLogout}>Đăng Xuất</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnSua} onPress={ChangeAccount}>
          <Image
            style={styles.imgSua}
            source={require("../../assets/iconluu.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "white",
    },
    profile_show: {
      flex: 2,
      backgroundColor: "#0c1b32",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight,
    },
    profile_show_image: {
      backgroundColor: "#fff",
      borderRadius: 100,
      elevation: 20,
      shadowOpacity: 6,
      shadowColor: "green",
    },
    img: {
      width: 130,
      height: 130,
      borderRadius: 100,
    },
    text_name: {
      color: "white",
      fontSize: 25,
      fontWeight: "500",
      marginTop: 10,
    },
    text_info: { color: "gray", fontStyle: "italic" },
  
    profile_edit: { flex: 3, paddingHorizontal: 15 },
    profile_edit_input: {
      flexDirection: "row",
      flex: 1,
      borderBottomWidth: 1,
      alignItems: "center",
    },
    profile_edit_textinput: {
      marginLeft: 20,
      fontSize: 18,
      paddingVertical: 8,
      width: "100%",
    },
    btnLogout: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    textLogout: {
      color: "#fac745",
      fontSize: 20,
      marginLeft: 20,
    },
    btnSua: {
      position: "absolute",
      width: 40,
      height: 40,
      top: 60,
      right: 30,
    },
    imgSua: { width: "100%", height: "100%" },
  });
