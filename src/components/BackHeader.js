import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const BackHeader = ({onPress,TitleName}) => {
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
                <TouchableOpacity  onPress={onPress}>
                    <AntDesign name="back" color={'#4584FF'} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default BackHeader;
