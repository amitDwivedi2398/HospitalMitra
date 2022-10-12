import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../../components/BannerSlider';
import CustomHeader from '../../components/CustomHeader';
import { sliderData } from '../../model/data';
import { windowWidth } from '../../utils/Dimensions';

const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
};
const InvestigationScreen = () => {
    const [images, setimages] = useState([
        { src: require('../../assets/catagiry/home.png'), title: 'Sir Sunder Lal Modern Medicine', key: '1' },
        { src: require('../../assets/catagiry/Ayurvedic.png'), title: 'Ayurvedic', key: '2' },
        { src: require('../../assets/catagiry/dantal.png'), title: 'Dental', key: '3' },
        { src: require('../../assets/catagiry/Homeopathic.png'), title: 'Homeopathic', key: '4' },
        { src: require('../../assets/catagiry/Neurosurgery.png'), title: 'Neurosurgery', key: '5' },
        { src: require('../../assets/catagiry/home.png'), title: 'Sir Sunder Lal Modern Medicine', key: '6' },
    ]);
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView>
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
                        numColumns={2}
                        data={images}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1 }}>
                                <View style={styles.mainView} >
                                    <View style={styles.mainRow} >
                                        <TouchableOpacity style={styles.btn} >
                                            <Image
                                                source={item.src}
                                                style={{
                                                    width: 60,
                                                    height: 50,
                                                    alignSelf: 'center',
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
                <View style={{ padding: 5, marginVertical: 10, }} >
                    <View style={styles.sliderImg}>
                        <Image style={styles.baner} source={require('../../assets/images/departmentHospital.png')} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
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
    txt: {
        alignSelf: 'center', marginTop: 5, textAlign: 'center', color: 'black', fontFamily: 'Roboto-Medium'
    },
    sliderImg: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        width: '100%'
    },
    baner: {
        width: '95%',
        height: 100,
        marginHorizontal: 5,
        borderRadius: 10,
    },
})

export default InvestigationScreen;
