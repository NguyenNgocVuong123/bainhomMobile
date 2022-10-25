import React from 'react';
import {Text, Button, View,TouchableOpacity } from 'react-native';


export default function Btntab(props) {
    return (
//       <Button 
//       color={props.color}
//       title={props.Text}
// />
<View style={{margin:5, flexDirection:'column'}}>

<TouchableOpacity onPress={props.onPress}  style={{backgroundColor: props.color,
    height:20,
    widght:20,
    borderRadius: 30,
    alignItems: "center",
    }}>  
<Text>{props.Text}</Text>
</TouchableOpacity></View>
    );}