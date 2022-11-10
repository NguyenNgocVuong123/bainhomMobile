import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image ,TextInput} from "react-native";

import MainButton from "../../src/components/MainButton";
import Ips from "../../src/input";
export default function Accont({ navigation }) {
    // const { Name, Email, Phone} = route.params;
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        paddingTop: StatusBar.currentHeight + 30,
        paddingHorizontal: 12,
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
          }}
          source={{ uri: "https://i.pravatar.cc/300" }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Tên
        </Text>
        <TextInput  style={{padding: 10, height: 40,width:250, borderColor: 'gray', borderWidth: 1,borderRadius: 10 }} value="trung" ></TextInput>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Email
        </Text>
        <TextInput  style={{padding: 10, height: 40,width:250, borderColor: 'gray', borderWidth: 1,borderRadius: 10 }} value="trung" ></TextInput>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Phone
        </Text>
        <TextInput  style={{padding: 10, height: 40,width:250, borderColor: 'gray', borderWidth: 1,borderRadius: 10 }} value="trung" keyboardType="numeric"></TextInput>
        
      </View>
      <MainButton
        
        style={{ backgroundColor: "red", marginBottom: 10 }}
        title={"Đổi Mật Khẩu"}
      />
      <MainButton
        
        style={{ backgroundColor: "red", marginBottom: 100 }}
        title={"Đăng Xuất"}
      />
    </View>
  );
}
