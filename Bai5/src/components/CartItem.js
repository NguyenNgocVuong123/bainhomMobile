import React, { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FavItem(props) {
  const { item, index, onChange } = props;
  const [user, setuser] = useState('');
  const url = "http://192.168.0.101:3000";
  useEffect(()=>{
    AsyncStorage.getItem('iduser').then(result => {
      setuser(result);
      console.log(result);
    })
  }, []);
  const [amount, setamount] = useState(item.amount);
  const handleDelete = async () => {
    try {
      const res = await axios.post(`${url}/fav/${user}/${item}`
        );

    } catch (error) {
      console.log(error);
    }
  };
  
  const handleOnRemove = async () => {
    if (amount > 1) {
      let favData = await AsyncStorage.getItem("favData");
      favData = JSON.parse(favData);
      let arr = [...favData];
      arr[index].amount = amount - 1;
      AsyncStorage.setItem("favData", JSON.stringify(arr));
      setamount((val) => val - 1);
      onChange && onChange(arr);
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
        source={{ uri: item.image }}
        style={{ height: 80, width: 80, borderRadius: 20, marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>{item.name} - </Text>
          <Text style={{ fontWeight: "bold", color: "#F99928" }}>
            {item.owner}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 11 }}>Price: {item.price} VND</Text>
            <Text style={{ fontSize: 11 }}>KhuVuc: {item.KhuVuc}</Text>
            <Text style={{ fontSize: 11 }}>Category: {item.category}</Text>
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
