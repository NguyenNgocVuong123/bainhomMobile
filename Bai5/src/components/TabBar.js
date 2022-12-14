import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
  var imgArr = [
    
    
    require("../../assets/fav.png"),
    require("../../assets/Basket.png"),
    require("../../assets/Home.png"),
    require("../../assets/fav.png"),
    require("../../assets/profile.png"),
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#0e8e6d",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: "#0bcc95",
        borderTopWidth: 2
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            params: route.state,
          });

          if (!isFocused && !event.defaultPrevented) {
            console.log("navi");
            navigation.navigate(route.name);
            
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Image
              style={{
                tintColor: isFocused ? "black" : "white",
                height: 22,
                width: 22,
                resizeMode: "contain",
              }}
              source={imgArr[index]}
            />
            <View
              style={{
                marginTop: 4,
                height: 2,
                width: 8,
                borderRadius: 10,
                backgroundColor: isFocused ? "white" : "black",
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
