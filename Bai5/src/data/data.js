import React, {Component} from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native-web';
import axios from 'axios';

export default class FlatListD extends Component{


    constructor(props){
        super(props);
        
        this.state={
            data1: [
                
            ]
        }
    }
    render(){
        return(
            <FlatList
            data={this.state.data1}
            renderItem={({item})=>
        <View >{item.name}</View>}
            />
        )
    }
    componentDidMount(){
        fetch(`http://192.168.0.100:3000/products`)
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({data1:responseJson});
        })
        .catch((e)=> (console.log(e)));
}
}