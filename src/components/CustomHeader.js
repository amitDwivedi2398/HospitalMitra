import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CustomHeader = ({IconName,TitleName}) => {
    const navigation = useNavigation('');
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding:7,
                    borderBottomWidth:1,
                    marginBottom:10,
                    borderColor:'#4584FF'
                }}>
                <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                    <AntDesign name="bars" color={'#4584FF'} size={30} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
                    {TitleName}
                </Text>
                <TouchableOpacity >
                <MaterialIcons name="notifications" color={'#4584FF'} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default CustomHeader;
