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
import RNSmtpMailer from "react-native-smtp-mailer";
import { Ionicons } from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';


export default function ForgotPassword({ navigation }) {
  const onGoBack = () => {
    navigation.goBack();
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
        <Text style={styles.titleText}>QUÊN MẬT KHẨU</Text></View>
      <View style={styles.viewtop1}>
        <Ips placeholder="Email" /></View>
      <View style={styles.btn}>
        <Btns color='#0bcc95' Text='Gửi Yêu Cầu'></Btns>
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
    paddingHorizontal: 5,
    marginHorizontal: 20
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

