import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image ,TextInput,StyleSheet,TouchableOpacity,ImageBackground,} from "react-native";
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
        const res = await axios.get(`${url}/users/email/${user.trim()}`);
  
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
    const image0 = { uri: "https://png.pngtree.com/thumb_back/fw800/background/20190428/pngtree-seamless-pattern-with-motifs-of-fast-foodburgershot-dogs-and-others-image_108304.jpg" };
    return (
      <View style={styles.main}>
        <ImageBackground source={image0} style={styles.su} resizeMode='repeat'>
        
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
            
            <Text style={styles.textLogout}>Đăng Xuất</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnSua} onPress={ChangeAccount}>
          <Image
            style={styles.imgSua}
            source={require("../../assets/iconluu.png")}
          />
        </TouchableOpacity>
        </ImageBackground>
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
      backgroundColor: 'black',
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 20,
      opacity: 0.8
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
  
    profile_edit: { flex: 3, paddingHorizontal: 15,
      borderTopWidth: 2,
      borderColor: '#0bcc95',
    },
    profile_edit_input: {
      flexDirection: "row",
      flex: 1,
      borderBottomWidth: 1,
      alignItems: "center",
    },
    profile_edit_textinput: {
      marginLeft: 20,
      fontSize: 24,
      paddingVertical: 8,
      width: 300,
      borderWidth: 1,
      borderColor: '#0bcc95',
      borderRadius: 100,
      color: 'black',
      paddingHorizontal: 20,
      backgroundColor: 'lightgray',
      opacity: 0.7
    },
    btnLogout: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 58
    },
    textLogout: {
      backgroundColor: '#0bcc95',
      color: "white",
      fontSize: 20,
      paddingLeft: 76,
      paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    width: 250,
    borderColor: '#0bcc95',
    borderWidth: 1,
    opacity:0.8,
    
    },
    btnSua: {
      position: "absolute",
      width: 40,
      height: 40,
      top: 60,
      right: 30,
    },
    imgSua: { width: "100%", height: "100%" },
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  
  
    list: {
      backgroundColor: "#fff",
      margin: 5,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#cccc",
      borderRadius: 5,
      justifyContent: "center",
      height: 250,
    },
    img: {
      width: 150,
      height: 150,
      borderColor: '#0bcc95',
      borderWidth: 2,
      borderRadius: 100
    },
    icon: {
      backgroundColor: "#F0FFF0",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      
    },
    su: {
      flex: 1,
      justifyContent: 'flex-start',
      height: "100%"
    }
  });
