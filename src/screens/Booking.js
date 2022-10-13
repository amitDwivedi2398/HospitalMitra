import React from 'react';
import {View, StyleSheet,Text, SafeAreaView, ScrollView,Image} from 'react-native';
import BackHeader from '../components/BackHeader';

const Booking = ({navigation}) => {
    return (
            <SafeAreaView>
                <BackHeader onPress={()=>navigation.openDrawer()} />
                <View style={{ padding: 5,  }} >
                <Text style={styles.txt} >Categories</Text>
          <ScrollView horizontal={true}  style={{ flexDirection: 'row' }} >
            <View style={styles.sliderImg}>
              <Image style={styles.baner} source={require('../assets/images/departmentHospital.png')} />
            </View>
            <View style={styles.sliderImg} >
              <Image style={styles.baner} source={require('../assets/images/hospitalbuilding.png')} />
            </View>
            <View style={styles.sliderImg} >
              <Image style={styles.baner} source={require('../assets/WalkThrough/img1.png')} />
            </View>
            <View style={styles.sliderImg} >
              <Image style={styles.baner} source={require('../assets/images/hospitalbuilding.png')} />
            </View>
          </ScrollView>
        </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    sliderImg: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#333',
        elevation: 2,
        shadowRadius: 10,
        marginHorizontal: 5,
      },
      baner: {
        width:100,
        height: 120,
        marginHorizontal: 5,
        borderRadius: 10,
      },
      txt:{
        color:'#4584FF',
        fontFamily: 'Roboto-Medium',
        fontSize:18,
        padding:10
      }
})

export default Booking;
