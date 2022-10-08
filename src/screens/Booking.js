import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Booking = () => {
    return (
        <View style={styles.container}>
            <Text>My Booking</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,justifyContent:'center',alignItems:'center'
    }
})

export default Booking;
