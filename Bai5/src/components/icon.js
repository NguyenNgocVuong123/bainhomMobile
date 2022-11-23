import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  
  export default function IconFilter(props) {
    const { onPress, TextFilter } = props;
  
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={styles.iconSP} onPress={onPress}>
        <Text style={styles.TextSP}>{TextFilter}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    iconSP: {
      width: 100,
      height: 40,
      backgroundColor: "#fff",
      borderRadius: 20,
      elevation: 10,
      shadowOpacity: 1,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 7,
    },
  
    TextSP: {
        color: '#000',
        fontSize: 20,
    },
  
    icon: {
      backgroundColor: "#F0FFF0",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
  });
  