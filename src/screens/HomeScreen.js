import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';

import { freeGames, paidGames, sliderData } from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import CustomHeader from '../components/CustomHeader';
import MarqueeView from 'react-native-marquee-view';
export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <CustomHeader TitleName={'City Hospital Mitra'} />

      <ScrollView style={{ padding: 10 }}>
        <Carousel
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 20}
          itemWidth={300}
          loop={true}
          autoplay={true}
        />
        <MarqueeView
          style={{ backgroundColor: '#fff', width: '100%', padding: 10 }}>
          <View style={{ backgroundColor: 'transperant', }}>
            <Text style={{ color: '#333', fontSize: 16, fontWeight: '600' }} >This is demo content</Text>
          </View>
        </MarqueeView>
        <View style={{ padding: 5 }}>
          <View style={styles.topHeding} >
            <Text style={styles.title} >Top Branches</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('BranchesViewAll')} >
              <Text style={styles.viewAll} >View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={{ flexDirection: 'row' }} >
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img1.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img2.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img3.png')} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ padding: 5 }} >
        <View style={styles.topHeding} >
            <Text style={styles.title} >Top Announcement</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll} >View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={{ flexDirection: 'row' }} >
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img1.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img2.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img3.png')} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ padding: 5 }} >
        <View style={styles.topHeding} >
            <Text style={styles.title} >Top Scheme</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll} >View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={{ flexDirection: 'row' }} >
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img1.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img2.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.sliderImg} >
              <TouchableOpacity>
                <Image style={styles.slider} source={require('../assets/WalkThrough/img3.png')} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ padding: 5, marginBottom: 10 }} >
          <ScrollView horizontal={true}  style={{ flexDirection: 'row' }} >
            <View style={styles.sliderImg}>
              <Image style={styles.baner} source={require('../assets/images/departmentHospital.png')} />
            </View>
            <View style={styles.sliderImg} >
              <Image style={styles.baner} source={require('../assets/images/hospitalbuilding.png')} />
            </View>
            <View style={styles.sliderImg} >
              <Image style={styles.baner} source={require('../assets/WalkThrough/img1.png')} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    color: '#4584FF', fontSize: 18, fontWeight: '700',
  },
  viewAll: {
    color: '#6F6F6F', fontSize: 15, fontWeight: '500'
  },
  topHeding:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
     marginBottom: 10
  },
  slider: {
    width: 90,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  sliderImg: {
    backgroundColor: '#F3F3F3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#333',
    elevation: 7,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    marginHorizontal: 5,
  },
  baner: {
    width: 300,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 10,
  }
})

