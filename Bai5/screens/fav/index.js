import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
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
  const image0 = { uri: "https://png.pngtree.com/thumb_back/fw800/background/20190428/pngtree-seamless-pattern-with-motifs-of-fast-foodburgershot-dogs-and-others-image_108304.jpg" };
  return (
    <View
      style={{
        
        flex: 1,
      }}
    >
      <ImageBackground source={image0} style={styles.su} resizeMode='repeat'>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
      <View style={styles.viewtop}>
        <Text style={styles.titleText}>MÓN</Text><Text style={styles.titleText2}>YÊU THÍCH</Text></View>
        
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
     

     </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    opacity: 0.7
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
  su: {
    flex: 1,
    justifyContent: 'flex-start',
    height: "100%"
  },
  viewtop: {
    marginTop: 5,
    paddingBottom: 15,
    flexDirection:'row',
    marginBottom: 10
  },
  titleText: {
    fontSize: 40,
    fontWeight: '400',
    color: 'lightgray',
    paddingTop:8,
    paddingLeft: 70,
    marginTop:40
  },
  titleText2:{
    fontSize: 40,
    fontWeight: '400',
    color: 'lightgray',
    paddingHorizontal:8,
    marginTop:40,
    paddingTop:8,
    color: '#0bcc95'
  },
});