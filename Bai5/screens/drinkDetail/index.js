import React, { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from '@expo/vector-icons';
import MainButton from "../../src/components/MainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export default function DrinkDetailScreen({ navigation, route }) {
  
  const params = route.params;
  const { item } = params;
  const [apidata, setApidata] = useState([]);
  const [faves, setFaves] = useState([]);
  const [user, setuser] = useState('');
  const url = "http://192.168.1.122:3000";
  useEffect(()=>{
    AsyncStorage.getItem('iduser').then(result => {
      setuser(result);
      console.log(result);
    })
  }, []);
  const onGoBack = () => {
    navigation.goBack();
  };
  
  // useEffect(function () {
  //   fetch(`http://192.168.0.100:3000/products`)
  //     .then((e) => e.json())
  //     .then((rep) => setApidata(rep))
  //     .catch((err) => {
  //       setApidata([]);
  //     });
  // }, []);
//   const addFave = (apidata) => {
//     const newFavesList = [...faves, apidata];
//     setFaves(newFavesList);
//     navigation.navigate("favScreen");
//     // make this function add to faves array (new array)

// };
// useEffect(() => {
//   setApidata()
// }, [])
  const addTofav = async () => {
    try {
      const res = await axios.post(`${url}/fav/`, {
        iduser: user.trim(),
        idproducts: item.ID,
        
        });

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <ScrollView style={{ backgroundColor: "#636363", flex: 1 }}>
      <View style={{ position: "relative",borderWidth:1 }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: item.image }}
        />
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 30,
            left: 12,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={addTofav}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 30,
            left: 350,
            width: 40,
            height: 40,
            direction:'rtl',
            borderRadius: 100,
          }}
          
        > 
          <MaterialIcons name="favorite-outline" size={40} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 12 }}>
        <Text style={{paddingLeft: 20,fontSize: 35,color: 'white', fontWeight: "bold",marginBottom:5,paddingBottom:5,borderBottomWidth: 7, borderBottomColor:'#E3E2C4',}}>{item.name}</Text>
        <View style={{paddingLeft: 20, paddingTop: 10}}>
          <View>
          <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Mô tả
        </Text>
            <Text style={{ fontSize: 15 ,color: '#E3E2C4'}}>Thời Gian Nấu: {item.time} </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15,color: '#E3E2C4'}}>Độ Khó: {item.difficult}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 15,color: '#E3E2C4'}}>Chi Chí: {item.price}VND</Text>
          </View>
        </View>
        <View >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 10,
            paddingLeft: 20
          }}
        >
          Nguyên Liệu 
        </Text>
        </View>
        <Text
          style={{
            color: '#E3E2C4',
            paddingTop:5,
            paddingLeft: 20,
            fontSize: 15
          }}
        >
          {item.ingredient}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 ,borderTopWidth: 7, borderTopColor:'#E3E2C4'}}>
          <View>
            <View
              style={{
                color: "#000",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            paddingLeft: 20
              }}
            >
              
              <Text style={{
                color: "white",
            fontSize: 30,
            fontWeight: "bold",
            paddingLeft: 110,
            
             }}>Hướng Dẫn</Text>
            <Text style={{lineHeight:25, color: '#E3E2C4'}}>{item.guide}</Text>
            </View>
        
            {/* <View
              style={{
                backgroundColor: "#F4F4F4",
                paddingHorizontal: 16,
                borderRadius: 100,
                marginTop: 4,
                width: 150,
                paddingVertical: 8,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#000", flex: 1 }}>{number}</Text>
            </View> */}
          </View>
          
        </View>
        
      </View>
    </ScrollView>
  );
}
