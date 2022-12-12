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
import React, { useEffect, useState,Component  } from 'react';
import Ipspass from '../../src/inputpass';
import Logos from '../../src/logo';
import Btnback from '../../src/btnback';
import RNSmtpMailer from "react-native-smtp-mailer";
import { Ionicons } from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';


export default function ForgotPassword({ navigation }) {
  const onGoBack = () => {
    navigation.goBack();
  };
  const [emailto, setuser] = useState('');
  // const Forgot=()=>{
  //   RNSmtpMailer.sendMail({
  //     mailhost: "smtp.gmail.com",
  //     port: "465",
  //     ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
  //     username: "chihirotran@gmail.com",
  //     password: "wjrdxqfpiioggxgi",
  //     fromName: "Some Name", // optional
  //     replyTo: `${emailto}`, // optional
  //     recipients: "toEmail1,toEmail2",
  //     bcc: ["bccEmail1", "bccEmail2"], // optional
  //     subject: "subject",
  //     htmlBody: "<h1>header</h1><p>body</p>",
  //      // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
  //   })
  //     .then(success => console.log(success))
  //     .catch(err => console.log(err));
  // }
  const sendEmail = () => {
    // RNSmtpMailer.sendMail({
    //   mailhost: "smtp.gmail.com",
    //   port: "465",
    //   ssl: true, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
    //   username: "chihirotran@gmail.com",
    //   password: "wjrdxqfpiioggxgi",
    //   from: `${emailto}`,
    //   recipients: "toEmail1,toEmail2",
    //   subject: "subject",
    //   htmlBody: "<h1>header</h1><p>body</p>",
    //   attachmentPaths: ["pathToFile1.png","pathToFile2.txt","pathToFile3.csv"],
    //   attachmentNames: ["image.jpg", "firstFile.txt", "secondFile.csv"],//only used in android, these are renames of original files. in ios filenames will be same as specified in path. In ios-only application, leave it empty: attachmentNames:[] 
    //   attachmentTypes: ["img", "txt", "csv"]//needed for android, in ios-only application, leave it empty: attachmentTypes:[]
    // })
    //   .then(success => alert(success))
    //   .catch(err => alert(err));
  };
  
  const imagesu = { uri: "https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
  return (
    
    <View style={styles.container}>
      <ImageBackground source={imagesu} style={styles.su} resizeMode="cover">
    <StatusBar barStyle="light-content"/>
    <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ffffff60",
            position: 'absolute',
            top:50,
            left: 15,
            width: 70,
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
        <Text style={styles.titleText}>QUÊN</Text><Text style={styles.titleText2}>MẬT KHẨU</Text></View>
      <View style={styles.viewtop1}>
        <Ips placeholder="Email" onChaneText={setuser}/></View>
      <View style={styles.btn}>
        <Btns color='#0bcc95' Text='Gửi Yêu Cầu' onPress={sendEmail}></Btns>
        {/* <Text style={styles.ortext}>OR</Text> */}
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
    paddingTop:8,
    paddingLeft: 55,
    marginTop:50
  },
  titleText2:{
    fontSize: 40,
    fontWeight: '400',
    color: 'lightgray',
    paddingHorizontal:8,
    marginTop:50,
    paddingTop:8,
    color: '#0bcc95'
  },
  tText: {
    fontSize: 20,


  },
  viewtop: {
    marginVertical: 30,
    flexDirection:'row',
    paddingBottom: 20
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

