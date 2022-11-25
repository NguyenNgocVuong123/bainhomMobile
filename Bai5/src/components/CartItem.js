import React, { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export default function FavItem(props) {
  const { item, index, onChange } = props;
  const [user, setuser] = useState('');
  const [pro,setpro] = useState('');
  const url = "http://10.0.60.97:3000";
  useEffect(()=>{
    AsyncStorage.getItem('iduser').then(result => {
      setuser(result);
      console.log(item);
      console.log(result);
    })
  }, []);
  useEffect(function () {
    fetch(`${url}/products/searchID/${item.idproducts}`)
      .then((e) => e.json())
      .then((rep) => setpro(rep))
      .catch((err) => {
        setpro([]);
      });
  }, []);
  const [amount, setamount] = useState(item.amount);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${url}/fav/${user}/${item.idproducts}`);
      // loi axios 404 khong xoa duoc
      console.log(res);

    } catch (error) {
      console.log(`${url}/favDL/${user}/${item.idproducts}`);
      console.log(error);
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 12,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 6,
      }}
    >
      <Image
        source={{ uri: pro?.image }}
        style={{ height: 80, width: 80, borderRadius: 20, marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>{pro?.name} - </Text>
          <Text style={{ fontWeight: "bold", color: "#F99928" }}>
            {pro?.owner}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 11 }}>Price: {pro?.price} VND</Text>
            <Text style={{ fontSize: 11 }}>KhuVuc: {}</Text>
            <Text style={{ fontSize: 11 }}>Category: {}</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            
            
          </View>
          <TouchableOpacity
            onPress={handleDelete}
            style={{
              marginLeft: 25,
              marginRight: 6,
              justifyContent: "center",
            }}
          >
            <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
