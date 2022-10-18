import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import BackHeader from '../components/BackHeader';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <BackHeader label={'Edit Profile'} />
              <View style={styles.header} >
                        <Text>Amit</Text>
              </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    width:0,
    height:0,
    borderStyle:'solid',
    borderLeftWidth:200,
    borderRightWidth:160,
    borderTopWidth:150,
    backgroundColor:'transparent',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    borderTopColor:'#4584FF'
  }
})

export default ProfileScreen;
