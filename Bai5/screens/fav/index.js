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
  const isFocused = useIsFocused();
  const [favList, setFavList] = useState([]);
  const getFavData = async () => {
    let favData = await AsyncStorage.getItem("favData");
    if (favData) {
      favData = JSON.parse(favData);
    } else {
      favData = [];
    }
    setFavList(favData);
  };
  useEffect(() => {
    getFavData();
  }, [isFocused]);
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
      {favList.length > 0 ? (
        <FlatList
          style={{ marginTop: 12 }}
          data={favList}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons name="cart-outline" size={130} color="gray" />
          <Text style={{ color: "gray", fontSize: 20 }}>Không Có Món Yêu Thích</Text>
        </View>
      )}

      
    </View>
  );
}
