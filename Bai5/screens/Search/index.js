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
<<<<<<< HEAD
  ImageBackground
} from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DrinkItem from "../../src/components/DrinkItem";
import { Ionicons } from "@expo/vector-icons";

export default function Search({ route }) {
  const navigation = useNavigation();
  const [namefood, setnamefood] = useState('');
  const url = "http://192.168.1.122:3000";
=======
} from "react-native";


import { useNavigation } from "@react-navigation/native";
import DrinkItem from "../../src/components/DrinkItem";

export default function Search({ route }) {
  const navigation = useNavigation();

  const url = "http://192.168.0.101:3000";
>>>>>>> d494c01fbbd502d3e122368a328a857442fb1fef
  const [data, setdata] = useState([]);
  const [datasearch, setdatasearch] = useState([]);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };

  function format(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    if (route.params.ingredient == null) {
      axios
        .get(`${url}/products/search/${route.params.name}`)
        .then((res) => {
          setdata(res.data);
        })
        .catch((err) => {
          setdata([]);
        });
    } else {
      axios
        .get(`${url}/products/searchname/${route.params.ingredient}`)
        .then((res) => {
          setdata(res.data);
        })
        .catch((err) => {
          setdata([]);
        });
    }
  }, []);
<<<<<<< HEAD
  const onGoBack = () => {
    navigation.goBack();
  };
  const image0 = { uri: "https://i.pinimg.com/564x/ae/65/d2/ae65d2ebc5d0addf56101b81943e2c83.jpg" };
  return (
    <ScrollView >
      
      <ImageBackground source={image0} style={{paddingTop: 20}}>
      <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 50,
            left: 5,
            width: 40,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
      <View style={{marginTop:StatusBar.currentHeight,alignItems: 'center',
    justifyContent: 'center',marginBottom:10,paddingBottom: 10, paddingRight: 15,paddingLeft: 50, flexDirection: "row", borderBottomWidth: 5, borderBottomColor: '#A8997D'}}><TextInput  style={{padding: 10, height: 40,width:'90%', borderColor: 'gray', borderWidth: 1,borderRadius: 10, fontSize:20,backgroundColor:'rgba(240,241,242,0.6)',  }} placeholder="Nấu món gì đây ta?"onChangeText={setnamefood}   ></TextInput><FontAwesome style={{marginLeft: 5}} name="search" size={24} color="lightgray" onPress={() => {navigation.navigate("searchfood", { name: namefood });}} /></View>
    </ImageBackground>
=======

  return (
>>>>>>> d494c01fbbd502d3e122368a328a857442fb1fef
    <>
      
      {data.length == 0 ? (
        <View>
          <Text style={{ color: "red", fontSize: 15 }}>
            Không tìm thấy kết quả cho "{route.params.name}"
          </Text>
        </View>
      ) : (
        <FlatList
        data={data}
        // renderItem={({ item }) => <Item name={item.name} />}
        renderItem={renderItem}
         initialNumToRender={7}
        keyExtractor={(item, index) => item + index}
        numColumns = {2}
      />
        
      )}
    </>
<<<<<<< HEAD
    </ScrollView>
=======
>>>>>>> d494c01fbbd502d3e122368a328a857442fb1fef
  );
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
