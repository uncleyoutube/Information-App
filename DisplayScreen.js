import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function DisplayScreen({route, navigation}) {
  const { info } = route.params;

  return (
    <>
      <SafeAreaView style={styles.title}>
          <Text style={{fontWeight: 'bold', justifyContent: 'center'}}>Ryan React Native Demo</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>You have entered the following:</Text>
      </View>
      <View style={styles.fields}>
        <Text><Text style={styles.bold}>Name: </Text>{firstName+" "+lastName}</Text>
        <Text><Text style={styles.bold}>Address: </Text>{address}</Text>
        <Text><Text style={styles.bold}>Phone Number: </Text>{phone}</Text>
        {image && <Image source={{ uri: image }} style={styles.picture} />}
        <View style={styles.container}> 
          <Button 
            title='Back'
            style={{padding: 10}}
            onPress={() => {
              setImage(null);
              setPage('main');
            }}
          />
        </View>
      </View>
    </>
  );
}