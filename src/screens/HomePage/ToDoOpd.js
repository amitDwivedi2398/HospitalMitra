import React from 'react';
import {View, StyleSheet,Text, SafeAreaView,Image} from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const ToDoOpd = () => {
    return (
        <SafeAreaView style={{flex:1}} >
        <CustomHeader/>
            <View>
                <Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/departmentHospital.png')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ToDoOpd;
