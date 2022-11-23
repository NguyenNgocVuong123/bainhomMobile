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
} from "react-native";


import { useNavigation } from "@react-navigation/native";
import DrinkItem from "../../src/components/DrinkItem";

export default function Search({ route }) {
  const navigation = useNavigation();

  const url = "http://192.168.0.101:3000";
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

  return (
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
