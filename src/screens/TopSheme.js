import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const TopSheme = () => {
    return (
        <View style={styles.container}>
            <Text>Top Scheme</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,justifyContent:'center',alignItems:'center'
    }
})

export default TopSheme;
