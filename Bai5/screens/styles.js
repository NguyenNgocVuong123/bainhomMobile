import { StyleSheet } from "react-native";
import { View } from "react-native-web";

export default StyleSheet.create({
  sectionContainer: {
    marginTop:20

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  bg: {
    width: "100%",
    height: 1500,
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: 'column',
  },


  imgbgs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor:'#A8997D',
    borderRadius: 20,
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
    color: 'white',
    fontSize: 30,
    fontWeight: '900'
  },
  
});
