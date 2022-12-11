import React from 'react';
import {Text, input, View, TextInput } from 'react-native';
export default function Ipspass(props) {
    return (
        <TextInput  secureTextEntry={true} style={{padding: 10,height: 40,width:250, borderColor: '#0bcc95', borderWidth: 1,borderRadius: 10,fontWeight:'100', color:'white'}}placeholder={props.placeholder} placeholderTextColor="lightgray" onChangeText={props.onChangeText} ></TextInput>
    );
  }