import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TextInput, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';




const CenterNameScreen = ({ navigation }) => {
    const [images, setimages] = useState([
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '1' },
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '2' },
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '3' },
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '4' },
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '5' },
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '6' },
    ]);

    return (
        <SafeAreaView style={styles.container} >
            <CustomHeader />
            <View style={styles.searchWrapperStyle}>
                <Ionicons size={18} name="search-outline" color="white" style={styles.iconStyle} />
                <TextInput
                    style={{ flex: 1 }}
                    underlineColorAndroid='transparent'
                    placeholder='Search Here'
                    placeholderTextColor={'#fff'}
                    placeholderColor={'#fff'}
                    color={'#fff'}
                />
            </View>
            <View>
                <FlatList
                    data={images}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <View style={styles.mainView} >
                                <View style={styles.mainRow} >
                                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('DoctorDetails')} >
                                        <Image
                                            source={item.src}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                alignSelf: 'center',
                                                marginHorizontal: 10,
                                            }}
                                        />
                                        <View style={{alignSelf:'center'}} >
                                            <Text style={{width:200}} >{item.title}</Text>
                                            <View style={styles.addresh}>
                                                <TouchableOpacity  >
                                                    <Text style={{width:200}} >Address</Text>
                                                </TouchableOpacity>
                                                <Rating style={{marginTop:5,alignSelf:'flex-start'}}
                                                imageSize={12}
                                                tintColor='#F3F3F3'
                                                    onFinishRating={(rating) => {
                                                        Alert.alert('Star Rating: ' + JSON.stringify(rating));
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.rightView}>
                                        <TouchableOpacity>
                                            <MaterialIcons size={20} name="favorite" color="#4584FF" style={[styles.leftView,{marginRight:10}]} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchWrapperStyle: {
        backgroundColor: "#4584FF",
        flexDirection: "row",
    },
    iconStyle: {
        marginTop: 12,
        marginHorizontal: 8,
    },
    mainView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    mainRow: {
        width: '90%',
        height: 100,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        shadowColor: 'blue',
        elevation: 4,
        shadowRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        flexDirection: 'row'
    },
    addresh:{
        marginTop:5
    },
    rightView:{
        justifyContent:'center',
    }
})

export default CenterNameScreen;
