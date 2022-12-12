import React from 'react';
import {Text, input, View, TextInput } from 'react-native';
export default function Ips(props) {
    return (
        <View><TextInput  style={{ opacity: 0.65,backgroundColor: 'black',padding: 10, color:'white',height: 40,width:250, borderColor: '#0bcc95', borderWidth: 1,borderRadius: 10, fontWeight: '400' }}placeholder={props.placeholder} onChangeText={props.onChangeText} placeholderTextColor="lightgray"><Text style={{fontWeight:'400', color:'white'}}>{props.Text}</Text></TextInput></View> 
    );
  }

