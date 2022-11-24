import axios from "axios";
import { memo, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  ImageBackground
} from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DrinkItem from "../../src/components/DrinkItem";
import IconCate from "../../src/components/category";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryX({ route }) {
  const navigation = useNavigation();
  const [namefood, setnamefood] = useState('');
  const url = "http://192.168.0.101:3000";
  const [data, setdata] = useState([]);
  const [datasearch, setdatasearch] = useState([]);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };

  function format(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  const onGoBack = () => {
    navigation.goBack();
  };
  const image0 = { uri: "https://i.pinimg.com/564x/ae/65/d2/ae65d2ebc5d0addf56101b81943e2c83.jpg" };
  return (
    <View style={styles.container}>
        <View style={{marginTop:StatusBar.currentHeight,alignItems: 'center',
    justifyContent: 'center',marginBottom:10,paddingBottom: 10, paddingRight: 15,paddingLeft: 50, flexDirection: "row", borderBottomWidth: 5, borderBottomColor: '#A8997D'}}><TextInput  style={{padding: 10, height: 40,width:'90%', borderColor: 'gray', borderWidth: 1,borderRadius: 10, fontSize:20,backgroundColor:'rgba(240,241,242,0.6)',  }} placeholder="Nấu món gì đây ta?"onChangeText={setnamefood}   ></TextInput><FontAwesome style={{marginLeft: 5}} name="search" size={24} color="lightgray" onPress={() => {navigation.navigate("searchfood", { name: namefood });}} /></View>
    
      <IconCate
      TextFilter = "Món Xào"
      onPress={() => {
        navigation.navigate("searchfood", { Category: "Xào" });
      }}
      />
      <IconCate
      TextFilter = "Món Rán"
      onPress={() => {
        navigation.navigate("searchfood", { Category: "Rán" });
      }}
      />
      <IconCate
      TextFilter = "Món Luộc"
      onPress={() => {
        navigation.navigate("searchfood", { Category: "Luộc" });
      }}
      />
      <IconCate
      TextFilter = "Món Chiên"
      onPress={() => {
        navigation.navigate("searchfood", { Category: "Chiên" });
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  wrap: {
    flex: 1,
  },
  list: {
    backgroundColor: "#fff",
    margin: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 5,
    justifyContent: "center",
    height: 250,
  },
  img: {
    width: 150,
    height: 150,
  },
  icon: {
    backgroundColor: "#F0FFF0",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
