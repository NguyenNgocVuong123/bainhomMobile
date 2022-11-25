import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useState } from "react";
import MainButton from "../../src/components/MainButton";
import { Ionicons } from "@expo/vector-icons";
import FavItem from "../../src/components/CartItem";

export default function favScreen() {
  const url = "http://10.0.60.97:3000";
  const isFocused = useIsFocused();
  const [user, setuser] = useState('');
  const [favList, setFavList] = useState([]);
  
  
  useEffect(()=>{
    AsyncStorage.getItem('iduser').then(result => {
      setuser(result);
      console.log(result);
    })
  }, []);
  useEffect(function () {
    fetch(`${url}/fav/${user}`)
      .then((e) => e.json())
      .then((rep) => setFavList(rep))
      .catch((err) => {
        console.log(rep);
        console.log(`${url}/fav/${user}`);
        console.log(`favList`.favList);
        setFavList([]);
      });
  },[]);
  const renderItem = ({ item, index }) => {
    return <FavItem item={item} index={index} onChange={setFavList} />;
  };

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight + 20,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#2FDBBC",
            flex: 1,
          }}
        >
          Món Ăn Yêu Thích
        </Text>
        
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "#2FDBBC",
          }}
        >
          
        </Text>
      </View>
      
      <FlatList
        data={favList}
        // renderItem={({ item }) => <Item name={item.name} />}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        numColumns = {1}
      />
     

      
    </View>
  );
}
