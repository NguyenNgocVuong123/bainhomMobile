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
import Ycitem from "../../src/components/Favsceent";
import Button from "../../src/components/Button";
import axios from "axios";
export default function FavScreen(navigation) {
  const url = "https://apihdnauan.onrender.com";
  const isFocused = useIsFocused();
  const [user, setuser] = useState('');
  const [favList, setFavList] = useState([]);
  const [favList1, setFavLis1] = useState([]);
  async function fetchData() {
    try {
      const res1 = await axios.get(`${url}/fav/${user}`);
      setFavList(res1.data);
      
      
      
    } catch (error) {
      setFavList([]);
      
    }
  }
  useEffect(()=>{
    AsyncStorage.getItem('iduser').then(result => {
      setuser(result);
      
    })
  }, []);
  useEffect(() => {
    axios
    .get(`${url}/fav/${user}`)
    .then((res) => {
      setFavList(res.data);
    })
    .catch((err) => {
      setFavList([]);
    });
  })
  // useEffect(function () {
    
  //   fetch(`${url}/fav/${user}`)
  //     .then((e) => e.json())
  //     .then((rep) => (setFavList(rep),console.log(`${url}/fav/${user}`)))
  //     .catch((err) => {
  //       console.log("Loi");
  //       setFavList([]);
  //     });
  // },[]);
  const testt= async () => {
    console.log(favList);
  }
  const renderItem = ({ item, index }) => {
    return <FavItem item={item} index={index} navigation={navigation} />;
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
          onPress={testt}
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
