import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
function DrinkItem(props) {
  const { item, navigation, index } = props;
  let b = item.ID;
  let url = `https://apihdnauan.onrender.com/products/${b}`;
  const goToDetail = () => {
    if (navigation) {
      navigation.navigate('DrinkDetailScreen', {
        item: item,
      });
    }
  };
  const TangLike = async ()=>{
    try{
      let a = item.like+1;
      console.log(a);
      console.log(b);
      console.log(url);
      const res = await axios.put("https://apihdnauan.onrender.com/products/" + b, {
        like: a,
     });
     console.log(res.data);
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity
      style={{ ...styles.container, marginLeft: 5,marginRight: 5 }}
      onPress={goToDetail}
    >
      <ImageBackground style={styles.imageStyle} source={{ uri: item?.image }}>
      <View style={styles.infoContainer}>
        <Text
          numberOfLines={2}
          style={{
            color: '#FFFFFF',
            fontWeight: 'bold',
            marginVertical: 8,
            fontSize:18,
          }}
        >
          {item?.name}
        </Text>
      </View>
  </ImageBackground>
  <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#2FDBBC', fontWeight: 'bold', flex: 1 }}>
                    {item?.KhuVuc} .. {item?.like}
          </Text>
          <AntDesign name="like2" size={24} color="black"  onPress={TangLike}/>
        </View>
      
      
    </TouchableOpacity>
  );
}

export default DrinkItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 150,
    borderRadius: 14,
    opacity: 0.85,
    justifyContent: 'flex-end',
    
    backgroundColor: 'rgba(0,0,0, 0.40)'
  },
  container: {
    width: 150,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginLeft: 12,
    flex: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  infoContainer: {
    
    marginTop:0,
    paddingHorizontal: 12,
    marginBottom: 1,
    opacity: 0.9,
  },
});
