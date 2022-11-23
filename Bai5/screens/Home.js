import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState,Component  } from 'react';
import { placeholder,FlatList, ScrollView, ImageBackground, StatusBar, Text, View, SafeAreaView,TextInput,Dimensions } from 'react-native';
import DrinkItem from '../src/components/DrinkItem';
import Ips from "../src/input";
import { Fontisto } from '@expo/vector-icons';
import dataList from "../src/data/data";
import styles from './styles';
import Btns from "../src/btn";
import axios from 'axios'
import Swiper from 'react-native-swiper';
import Btntab from "../src/btntab";
import MainButton from "../src/components/MainButton";
import Item from "../src/Iteam";
function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const [apidata, setApidata] = useState([]);
  const [data1, setdata1] = useState([]);
  let ScreenHeight = Dimensions.get("window").height;
  let urlpro = `http://192.168.0.101:3000/products`;
  let urlpro1 = `http://192.168.0.101:3000/products/1`;
  const [data2, setdata2] = useState([]);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };
  const logOut = async () => {
    const res = await axios.get(
      `http://192.168.0.101:3000/user`
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  const getapi = ()=>{
    axios.get(`http://192.168.0.101:3000/products`).then((Response)=> {
      setApidata(Response.data);
    });
  };
  const _retrieveData = async () => {   
    try {     const value = await AsyncStorage.getItem('iduser1'); 
        if (value !== null) {       
    // We have data!!       console.log(value);  
    alert(value);  
     } 
    else{
      alert("that bai"); 
    }  } 
    catch (error) {   
      
      // Error retrieving data   
    } 
    };

  useEffect(function () {
    fetch(urlpro)
      .then((e) => e.json())
      .then((rep) => setApidata(rep))
      .catch((err) => {
        setApidata([]);
      });
  }, []);
  useEffect(function () {
    fetch(urlpro1)
      .then((e) => e.json())
      .then((rep) => setdata1(rep))
      .catch((err) => {
        setdata1([]);
      });
  }, []);
  // componentDidMount() {
  //   axios.get(`http://192.168.0.100:3000/products`)
  //     .then(res => {
  //       const products = res.data;
  //       this.setState({ products });
  //     })
  //     .catch(error => console.log(error));
  // }
  // const getUserData = async () => {
  //   // let curUser = await AsyncStorage.getItem('curUser');
  //   // curUser = JSON.parse(curUser);
  //   // setuser(curUser);
  //   try {
  //     const res = await axios.get(
  //       `http://192.168.0.100:3000/user`
  //     );
  //     // if (res.data.Email == Email.trim()) {
  //     //   alert("Email đã được đăng ký!");
  //     //   return;
  //     // } else {
  //     //   const res = await axios.post("http://192.168.0.100:3000/user/", {
  //     //     Name: Name.trim(),
  //     //     Email: Email.trim(),
  //     //     password: password.trim(),
  //     //     Phone: Phone.trim(),
  //     //   });
  //     //   alert("Đăng ký thành công!");
  //     //   navigation.goBack();
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const image0 = { uri: "https://previews.123rf.com/images/pazhyna/pazhyna1610/pazhyna161000045/64061908-fast-food-seamless-pattern-in-hand-drawn-doodle-style-with-different-objects-on-fast-food-theme-all-.jpg" };
  const image1 = { uri: "https://media.self.com/photos/622912847b959736301bfb91/2:1/w_1280,c_limit/GettyImages-1301412050.jpg" };
  const image2 = { uri: "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg" };
  const image3 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5n06oW6oAiLlsj2KGNDntJwbBCBKs77CzJLcy_rrNKucMyVKwgDTd1WSE20zVE6vTTjs&usqp=CAU" };
  
  return (
    <ScrollView>
  <ImageBackground source={image0} style={styles.bg}>
      <View style={{marginTop:StatusBar.currentHeight,alignItems: 'center',
    justifyContent: 'center',marginBottom:10}}><TextInput  style={{padding: 10, height: 40,width:'90%', borderColor: 'gray', borderWidth: 1,borderRadius: 10, fontSize:20,backgroundColor:'rgba(240,241,242,0.6)',  }} placeholder="Nấu món gì đây ta?"  ></TextInput></View>
      <View style={{height:200,borderWidth:3, borderRadius: 20 }}><Swiper style={styles.wrapper} showsButtons autoplay={{delay: 2500}}>
  <ImageBackground source={image1} style={styles.imgbgs}>
  <View style={styles.slide1}>
    <Text style={styles.text}>Thơm ngon</Text>
  </View>
  </ImageBackground>
  <ImageBackground source={image2} style={styles.imgbgs}>
  <View style={styles.slide2}>
    <Text style={styles.text}>Mời bạn</Text>
  </View>
  </ImageBackground>
  <ImageBackground source={image3} style={styles.imgbgs}>
  <View style={styles.slide3}>
    <Text style={styles.text}>Ăn ngay</Text>
  </View>
  </ImageBackground>
</Swiper></View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Các Món Theo Lượt Yêu Thích</Text>
        <FlatList
          data={data1}
          horizontal
          showsHorizontalScrollIndicator={true}
          numRow = {2}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem} />
        
        </View>
    <View style={{height:70 , backgroundColor: 'red'}}>
      <FlatList
      data={apidata}
      horizontal
      showsHorizontalScrollIndicator={true}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item name={item.ingredient} />}/>
    </View>
    <View style={styles.sectionContainer}>
    {apidata === "" ? (
      <Text style={styles.loadingText}>Loading...</Text>
    ) : (
      
      <FlatList
        data={apidata}
        // renderItem={({ item }) => <Item name={item.name} />}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        numColumns = {2}
      />
    )}
  </View>
  </ImageBackground>
  </ScrollView>
    // <ScrollView 
    //   style={{
    //     backgroundColor: '#fff',
    //     paddingHorizontal: 12,
    //     marginTop: StatusBar.currentHeight + 10,
    //   }}
    // >
    //   {/* <Text style={{ marginTop: 20, fontSize: 22 }}>{`Chào, ${
    //     res && res.name
    //   }!`}</Text> */}
    //   <View
    //     style={{
    //       backgroundColor: '#67E5CE',
    //       padding: 20,
    //       borderRadius: 12,
    //       marginTop: 20,
    //     }}
    //   >
    //     <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
    //       <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
    //         App Hướng Dẫn Nấu Ăn
    //       </Text>
    //       <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
    //         Cho Người Mới
    //       </Text>
    //     </View>
    //   </View>
      // <View style={styles.sectionContainer}>
      //   <Text style={styles.title}>Các Món Có Thể Bạn Sẽ Thích</Text>
      //   <FlatList
      //     data={apidata}
      //     horizontal
      //     showsHorizontalScrollIndicator={true}
      //     keyExtractor={(item, index) => item + index}
      //     renderItem={renderItem}
      //   />
      // </View>
    //   <View style={styles.sectionContainer}>
    //     <Text style={styles.title}>Có thể bạn sẽ thích</Text>
    //     <FlatList
    //       data={apidata}
    //       horizontal
    //       showsHorizontalScrollIndicator={false}
    //       keyExtractor={(item, index) => item + index}
    //       renderItem={renderItem}
    //     />
    //   <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={apidata}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //   />
    // </SafeAreaView>
    //   </View>
    //   <View>
    //       {/* <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }}></Btnback></View> */}
    //       <Btns color="#8e64a1" Text='Log Out' onPress={logOut}></Btns>
          
    //     </View>
    // </ScrollView>
    

  );
}
export default HomeScreen;