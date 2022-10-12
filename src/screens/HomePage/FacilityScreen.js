import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TextInput, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../../model/data';
import { windowWidth } from '../../utils/Dimensions';
import BannerSlider from '../../components/BannerSlider';



const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };
const FacilityScreen = ({ navigation }) => {
    const [images, setimages] = useState([
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '1' },
    ]);

    return (
        <SafeAreaView style={styles.container} >
            <CustomHeader />
            <View>
                <Carousel
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 20}
                    itemWidth={300}
                    loop={true}
                    autoplay={true}
                />
            </View>
            <View>
                <FlatList
                    data={images}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <View style={styles.mainView} >
                                <View style={styles.mainRow} >
                                    <TouchableOpacity style={styles.btn}  >
                                        <Image
                                            source={item.src}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                alignSelf: 'center',
                                                marginHorizontal: 10,
                                            }}
                                        />
                                        <View style={{ alignSelf: 'center' }} >
                                            <Text style={{ width: 200 }} >{item.title}</Text>
                                            <View style={styles.addresh}>
                                                <TouchableOpacity  >
                                                    <Text style={{ width: 200 }} >Address</Text>
                                                </TouchableOpacity>
                                                <Rating style={{ marginTop: 5, alignSelf: 'flex-start' }}
                                                    imageSize={12}
                                                    tintColor='#F3F3F3'
                                                    onFinishRating={(rating) => {
                                                        Alert.alert('Star Rating: ' + JSON.stringify(rating));
                                                    }}
                                                />
                                            </View>
                                        </View>
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
        alignSelf: 'center'
    },
    btn: {
        flexDirection: 'row'
    },
    addresh: {
        marginTop: 5
    },
    title: {
        color: '#4584FF',
        fontSize: 18,
        fontWeight: '700',
        padding: 20
    }
})

export default FacilityScreen;
