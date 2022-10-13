import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, } from 'react-native';
import { color } from 'react-native-reanimated';
import BackHeader from '../../components/BackHeader';

const DoctorAbout = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <BackHeader TitleName={'name'} onPress={() => navigation.navigate('OtpSchame')} />
            <View style={styles.mainContainer} >
                <Image style={styles.img} source={require('../../assets/ResultFindDoctor/img02.png')} />
                <Text style={styles.docName} >Dr. Vishwas Madhav Thakur</Text>
                <Text style={styles.subTitle} >General Physician, General Practitioner
                </Text>
                <View style={styles.row} >
                    <Text style={styles.rowtxt} >Patients</Text>
                    <Text style={styles.rowtxt}>Experience</Text>
                    <Text style={styles.rowtxt}>Fees</Text>
                </View>
                <View style={styles.rowTwo}>
                <Text style={[styles.txt,]} >1K</Text>
                    <Text style={styles.txt}>9.5</Text>
                    <Text style={styles.txt}>₹50</Text>
                </View>
                <View>
                    <Text style={styles.about} >About Doctor</Text>
                    <Text style={{color:'#6A6A6A'   }} >Dr. V.M. Thakur has 18 years of experience as General Physician and intensivist. He has Vast Experience as consultant in Medanta The Medicity Hopital sector 38 Gurgaon ,Kailash Hospital Noida and UCMS & GTBH Delhi in Medical and surgical ICU. He is also member of ISCCM (Indian Society of Critical Care Medicine).</Text>
                </View>
                <View>
                    <Text style={styles.about} >OPD Schedule</Text>
                    <Text style={{color:'#6A6A6A'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maecenas in dignissim in habitant. Fermentum elementum turpis ultricies mauris. Lacus orci eget in purus.</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        alignSelf: 'center'
    },
    img: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    docName: {
        color: '#4584FF',
        fontFamily: 'Roboto-Medium',
        fontSize: 25,
        marginTop: 10,
        lineHeight: 25,
        alignSelf: 'center'
    },
    subTitle: {
        color: '#6A6A6A',
        fontFamily: 'Roboto-Medium',
        lineHeight: 20,
        alignSelf: 'center',
        fontSize: 15
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50,
    },
    rowtxt:{
        color:'#6A6A6A',
        fontFamily: 'Roboto-Medium',
        fontSize:17,

    },
    txt:{
        color:'#4584FF',
        fontFamily: 'Roboto-Bold',
        fontSize:17,
    },
    rowTwo:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
    },
    about:{
        color:'#4584FF',
        marginTop:20,
        fontFamily: 'Roboto-Bold',
        fontSize:18,
    }
})

export default DoctorAbout;
