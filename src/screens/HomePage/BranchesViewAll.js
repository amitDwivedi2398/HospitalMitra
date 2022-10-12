import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';



const BranchesViewAll = ({navigation}) => {
    const [images, setimages] = useState([
        { src: require('../../assets/catagiry/home.png'), title: 'Sir Sunder Lal Modern Medicine',key:'1' },
        { src: require('../../assets/catagiry/Ayurvedic.png'), title: 'Ayurvedic',key:'2' },
        { src: require('../../assets/catagiry/dantal.png'), title: 'Dental',key:'3' },
        { src: require('../../assets/catagiry/Homeopathic.png'), title: 'Homeopathic',key:'4' },
        { src: require('../../assets/catagiry/Neurosurgery.png'), title: 'Neurosurgery',key:'5' },
        { src: require('../../assets/catagiry/home.png'), title: 'Sir Sunder Lal Modern Medicine',key:'6' },
    ]);

    return (
        <SafeAreaView style={styles.container} >
            <CustomHeader TitleName={'All Branches'} />
                <View style={styles.searchWrapperStyle}>
                    <Ionicons size={18} name="search-outline" color="white" style={styles.iconStyle} />
                    <TextInput
                        style={{ flex: 1 }}
                        underlineColorAndroid='transparent'
                        placeholder='Search Here'
                        placeholderTextColor={'#fff'}
                        placeholderColor={'#fff'}
                    />
                </View>
                <View>
                    <FlatList
                        numColumns={2}
                        data={images}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1 }}>
                                <View style={styles.mainView} >
                                    <View style={styles.mainRow} >
                                        <TouchableOpacity style={styles.btn}  onPress={()=> navigation.navigate('CenterNameScreen')} >
                                            <Image
                                                source={item.src}
                                                style={{
                                                    width: 60,
                                                    height: 50,
                                                    alignSelf:'center',
                                                }}
                                            />
                                            <Text style={styles.txt} >{item.title}</Text>
                                        </TouchableOpacity>
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
        backgroundColor: '#fff'
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
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf:'center',
        marginTop:20
    },
    mainRow: {
        width: '90%',
        height: 110,
        backgroundColor: '#F3F3F3',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'blue',
        elevation: 7,
        shadowRadius: 10,
    },
    btn: {
        flex: 1, 
        justifyContent: 'center'
    },
    txt:{
        alignSelf:'center',marginTop:5,textAlign:'center',color:'black',fontFamily: 'Roboto-Medium'
    }
})

export default BranchesViewAll;
