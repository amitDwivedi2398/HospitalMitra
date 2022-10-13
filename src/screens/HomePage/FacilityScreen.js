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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
};
const FacilityScreen = ({ navigation }) => {
    const [images, setimages] = useState([
        { src: require('../../assets/ResultFindDoctor/img.png'), title: 'Dr. Vishwas Madhav Thakur', key: '1' },
    ]);


    function TabA() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him.</Text>
            </View>
        );
    }
    function TabB() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him.</Text>
            </View>
        );
    }
    function TabC() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him.</Text>
            </View>
        );
    }

    const Tab = createMaterialTopTabNavigator();

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
                                            <Text style={{ width: 200, fontFamily: 'Roboto-Medium', color: '#4584FF' }} >{item.title}</Text>
                                            <View style={styles.addresh}>
                                                <TouchableOpacity  >
                                                    <Text style={{ width: 200, color: '#747474' }} >Address</Text>
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
            <Text style={styles.heding} >Available Facilities</Text>
            <View style={{ flex: 1, padding: 10 }} >
                <Tab.Navigator>
                    <Tab.Screen name='Tab A' component={TabA} />
                    <Tab.Screen name='Tab B' component={TabB} />
                    <Tab.Screen name='Tab C' component={TabC} />
                </Tab.Navigator>
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
    },
    text: {
    },
    heding: {
        color: '#4584FF',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        padding: 10,
        marginLeft: 5
    }
})

export default FacilityScreen;
