import React from 'react';
import {Text, Button, View,TouchableOpacity } from 'react-native';


export default function Btns(props) {
    return (
//       <Button 
//       color={props.color}
//       title={props.Text}
// />
<View style={{margin:10, justifyContent: 'center', alignItems: 'center'}}>
<TouchableOpacity onPress={props.onPress}  style={{backgroundColor: props.color,
    paddingHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    width: 250,
    borderColor: '#0bcc95',
    borderWidth: 1,
    opacity:0.8
    }}>  
<Text style={{fontWeight:'bold', color:'white'}}>{props.Text}</Text>
</TouchableOpacity></View>
    );}