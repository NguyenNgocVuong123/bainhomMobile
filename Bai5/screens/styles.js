import { StyleSheet } from "react-native";
import { View } from "react-native-web";

export default StyleSheet.create({
  sectionContainer: {
    marginTop:20,
    paddingTop: 15,
    borderTopWidth: 2,
    borderColor: '#0bcc95',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    height: "100%"
  },


  imgbgs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor:'#0bcc95',
    borderRadius: 20,
    resizeMode: "cover"
  },
  
  slide1: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.40)',
    
  },
  slide2: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.40)'
  },
  slide3: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.40)'
  },
  text: {
    color: 'lightgray',
    fontSize: 30,
    fontWeight: '900'
  },
  
});
