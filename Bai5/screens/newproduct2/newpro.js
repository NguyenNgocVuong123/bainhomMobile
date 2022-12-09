import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image ,TextInput,StyleSheet,TouchableOpacity,Button} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Ips from '../../src/input';
import Btns from '../../src/btn';
import axios from 'axios';
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [linkimg,setlinkimh]=useState(null);
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
  const url = "https://apihdnauan.onrender.com";

  const onGoBack = () => {
    navigation.goBack();
  };
  const onSignUp = () => {
    if (Name.trim() == "" || !Name) {
      alert("Không được để trống tên món ăn !");
    }  else if (description.trim() == "" || !description) {
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
        image: linkimg.trim(),
        price: price.trim(),
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
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      // setImage(result.uri);
      const formdata = new FormData();
      formdata.append('data',{
        uri: result.uri,
        type: result.type,
        name: result.fileName,
      })
      let res = await fetch(
        'https://uploadimgs3.onrender.com/upload',
        {
          method: 'post',
          body: formdata,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      console.log(responseJson.linkimg);
      setlinkimh(responseJson.linkimg);
      console.log(result);
    }
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.profile_edit_textinput}>
        <Ips Text="Name" placeholder="Food Name" onChangeText={setname} /></View>
      
        
      <View style={styles.profile_edit_textinput}>
        <Ips Text="price" placeholder="price approx" onChangeText={setprice} /></View>
      <View style={styles.profile_edit_textinput}>
      <Ips Text="time" placeholder="time" onChangeText={settime} /></View>
      <View style={styles.profile_edit_textinput}>
      <Ips Text="difficult" placeholder="Difficult" onChangeText={setdifficult} /></View>
      <View style={styles.profile_edit_textinput}>
      <Ips Text="description" placeholder="Description" onChangeText={setdescription} /></View>
      <View style={styles.profile_edit_textinput}>
      <Ips Text="ingredient" placeholder="ingredient" onChangeText={setingredient} /></View>
      <View style={styles.profile_edit_textinput}>
      <Ips Text="guide" placeholder="guide" onChangeText={setguide} /></View>
      <View style={styles.profile_edit_textinput}>
      <Ips Text="guide" placeholder="KhuVuc" onChangeText={setKhuVuc} /></View>
      <View style={styles.profile_edit_textinput}>
      <Ips Text="guide" placeholder="Category" onChangeText={setcategory} /></View>
      <Button title="Pick an image " onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Btns color='#81d3e3' Text='Up' onPress={onSignUp}></Btns>

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
