import React from 'react';
    import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
    import PresentationalComponent from './PresentationalComponent'

    export default class App extends React.Component {
       constructor(){
           super();
           this.state = {
            email: '',
            password: '',
            result: false,
           }
       }

       updateState = () => {
          this.setState({ myState: 'The state is updated' })
       }

       _userLogin() {
         var email = this.state.username;
         var password = this.state.password;
         if (email && password) { // if validation fails, value will be null
           fetch("http://localhost:5000/api/login", {
             method: "POST",
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               username: email,
               password: password,
             })
           })
           .then((response) => response.json())
           .then((responseData) => {
             console.log(responseData);
             AlertIOS.alert(
               "Login Success!",
               "Click the button to get a Chuck Norris quote!"
             ),
             this._onValueChange(STORAGE_KEY, responseData.id_token)
           })
           .done();
           renderResults();
         }
       }

       renderResults = () => {
           if(responseData){
                this.setState({
                    result: true
                })
           }
       }

       handleEmail = (text) => {
             this.setState({ email: text })
       }

       handlePassword = (text) => {
             this.setState({ password: text })
       }

       render() {
          return (
             <View>
                {this.state.result ?
                     <PresentationalComponent/>
                     :
                     <View>
                        <TextInput
                          underlineColorAndroid = "transparent"
                          placeholder = "Email"
                          placeholderTextColor = "#9a73ef"
                          autoCapitalize = "none"
                          onChangeText = {this.handleEmail}
                        />
                        <TextInput
                           underlineColorAndroid = "transparent"
                           placeholder = "Password"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}
                        />
                        <Button
                             onPress={this._userLogin}
                             title="Learn More"
                             color="#841584"
                             accessibilityLabel="Learn more about this purple button"
                         />
                     </View>
                }
             </View>
          );
       }
    }