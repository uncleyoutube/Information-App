import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, Button, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export default function InputScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [page, setPage] = useState('main');
  const [image, setImage] = useState(null);

  // handle what happens on button press
  const handleButton = () => {
    console.log('Name:', firstName+' '+lastName);
    console.log('Address:', address);
    console.log('Phone:', phone);

    if (!firstName) {
      Alert.alert('Error','First name is missing');
    } else if (!lastName) {
        Alert.alert('Error','Last name is missing');
    } else if (!address) {
      Alert.alert('Error','Address is missing');
    } else if (!phone) {
      Alert.alert('Error','Phone number is missing');
    } else {
      console.log('button pressed');
    }
  }

  // access to user's camera and taking a picture, setting the image
  const cameraAccess = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Require Camera Permissions');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  // access to user's photo library and selecting a picture, setting the image
  const libraryAccess = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Require Photo Library Permissions');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  const formatPhone = (input) => setPhone(input.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3'));

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <>
        <SafeAreaView style={styles.title}>
          <Text style={{fontWeight: 'bold', justifyContent: 'center'}}>Ryan React Native Demo</Text>
        </SafeAreaView>
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold'}}>Please fill out the below fields.</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.padded}>First Name:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='First Name' 
            onChangeText={text => setFirstName(text)}
          />
          <Text style={styles.padded}>Last Name:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Last Name' 
            onChangeText={text => setLastName(text)}
          />
          <Text style={styles.padded}>Address:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Address' 
            onChangeText={text => setAddress(text)}
          />
          <Text style={styles.padded}>Email Address:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Email Address' 
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.padded}>Phone Number:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Phone Number' 
            keyboardType='numeric'
            onChangeText={text => formatPhone(text)}
            maxLength={10}
          />

          <View style={styles.container}>
            <View style={styles.padded}>
              <Button 
                title='Take Picture'
                style={{padding: 10}}
                onPress={cameraAccess} 
              />
            </View>
            <View style={styles.padded}>
              <Button 
                title='Load Picture'
                style={{padding: 10}}
                onPress={libraryAccess} 
              />
            </View>
          </View>
          <View style={styles.container}>
            <Button 
              title='Submit'
              style={{backgroundColor: ''}}
              onPress={handleButton} 
            />
          </View>
        </View>
      </>
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 24,
    justifyContent: 'flex-start',
  },
  title: {
    height: 80,
    width: Dimensions.get('window').width, 
    backgroundColor: '#ded9ca',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'flex-end',
  },
  fields: {
    flex: 6,
    backgroundColor: '#fff',
    padding: 36,
    justifyContent: 'flex-start',
  },
  input: {
    width: 300,
    padding: 8,
    backgroundColor: '#f5f5f5'
  },
  picture: {
    alignItems: 'center',
    width: 300,
    height: 300,
    marginTop: 20,
    padding: 16,
  },
  padded: {
    padding: 8
  },
  bold: {
    fontWeight: 'bold'
  }
}); */