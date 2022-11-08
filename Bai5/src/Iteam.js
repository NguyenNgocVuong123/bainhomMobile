import React from "react";
import { StyleSheet, View, Text ,TouchableOpacity} from "react-native";
 
export default function Item({name}) {
  return (
    <View style={styles.items}>
      <TouchableOpacity style={{height:20}} ><Text>{name}</Text></TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  items: {
    backgroundColor: "#fd79a8",
    margin: 10,
    height: 50,
    padding: 15,
    borderRadius: 10,
  },
  itemText: {
    color: "white",
  },
});