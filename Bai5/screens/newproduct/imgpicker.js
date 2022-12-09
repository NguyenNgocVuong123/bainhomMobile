import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker2 from 'expo-image-picker';

import Button from '../../src/components/Button';
import ImageViewer from '../../src/components/ImageViewer';

const PlaceholderImage = require('../../assets/background-image.png');

export default function NewImg({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [pickedImagePath, setPickedImagePath] = useState('');
  // const pickImageAsync = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //       alert(result);
  //     setSelectedImage(result.assets[0].uri);
  //     alert(result.assets[0].uri);
      
  //   } else {
  //     alert("You did not select any image.");
  //   }
  // };
const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker2.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Bạn đã từ chối cho phép ứng dụng này truy cập ảnh của bạn!");
      return;
    }

    const result = await ImagePicker2.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.assets[0].uri);
      const formdata = new FormData();
      formdata.append('data',{
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: result.assets[0].assetId,
      })
      console.log(result.assets[0].fileName);
      console.log(result.assets[0].uri);
    }
  }
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker2.launchImageLibraryAsync({
    mediaTypes: ImagePicker2.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setPickedImagePath(result.assets[0].uri);
    console.log(result.assets[0]);
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer  selectedImage={pickedImagePath } />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={showImagePicker} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex:1, 
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
