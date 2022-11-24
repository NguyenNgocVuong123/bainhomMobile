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
export default function NewProductScreen({ navigation }) {
  const [price, setprice] = useState("");
  const [Name, setname] = useState("");
  const [Img, setImg] = useState("");
  const [time, settime] = useState("");
  const [difficult, setdifficult] = useState("");
  const [description, setdescription] = useState("");
  const [ingredient, setingredient] = useState("");
  const [guide, setguide] = useState("");
  const [KhuVuc, setKhuVuc] = useState("");
  const [category, setcategory] = useState("");
  
  const url = "http://192.168.0.101:3000";

  const onGoBack = () => {
    navigation.goBack();
  };
  const onSignUp = () => {
    if (Name.trim() == "" || !Name) {
      alert("Không được để trống tên món ăn !");
    } else if (Img.trim() == "" || !Img) {
      alert("Không được để trống link ảnh !");
    } else if (description.trim() == "" || !description) {
      alert("Không được để trống mô tả !");
    } else if (ingredient.trim() == "" || !ingredient) {
      alert("Không được để trống thành phần !")
    }else if (guide.trim() == "" || !guide) {
      alert("Không được để trống hướng dẫn chi tiết !")
    } else {
      createAccount();
    }
  };
  const createAccount = async () => {
    try {
        const res = await axios.post(`${url}/products/`, {
        Name: Name.trim(),
        image: Img.trim(),
        time: time.trim(),
        difficult: difficult.trim(),
        description: description.trim(),
        ingredient: ingredient.trim(),
        guide: guide.trim(),
        like: `0`,
        KhuVuc: KhuVuc.trim(),
        category: category.trim(),
        });
        alert("Thêm Công Thức Thành Công!");

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
      <Text style={styles.titleText}>Create new products</Text>
      <View style={styles.viewtop1}>
        <Ips Text="Name" placeholder="Food Name" onChangeText={setname} /></View>
      <View style={styles.viewtop1}>
        <Ips Text="image" placeholder="Link Image" onChangeText={setImg} /></View>
      <View style={styles.viewtop1}>
        <Ips Text="price" placeholder="price approx" onChangeText={setprice} /></View>
      <View style={styles.viewtop1}>
      <Ips Text="time" placeholder="time" onChangeText={settime} /></View>
      <View style={styles.viewtop1}>
      <Ips Text="difficult" placeholder="Difficult" onChangeText={setdifficult} /></View>
      <View style={styles.viewtop1}>
      <Ips Text="description" placeholder="Description" onChangeText={setdescription} /></View>
      <View style={styles.viewtop1}>
      <Ips Text="ingredient" placeholder="ingredient" onChangeText={setingredient} /></View>
      <View style={styles.viewtop1}>
      <Ips Text="guide" placeholder="guide" onChangeText={setguide} /></View>
      <View style={styles.viewtop1}>
      <Ips Text="guide" placeholder="KhuVuc" onChangeText={setKhuVuc} /></View>
      <View style={styles.viewtop1}>
      <Ips Text="guide" placeholder="Category" onChangeText={setcategory} /></View>
      <Btns color='#81d3e3' Text='Up' onPress={onSignUp}></Btns>
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

