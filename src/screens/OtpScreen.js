import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import OtpInputs from 'react-native-otp-inputs';



const OtpScreen = ({ navigation }) => {
  const [otp, setOTP] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    {/* <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          /> */}
                    <Image style={{ width: 300, height: 250 }} source={require('../assets/VerifyMobile/img2.png')} />

                </View>

                <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 18,
                        fontWeight: '500',
                        color: '#333',
                        marginTop:10
                    }}>
                     Enter the 4 digit OTP sent to
                </Text>

                {/* <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        /> */}
        <View style={{height: 100}}>
              <OtpInputs
                textAlign="center"
                inputStyles={styles.otp}
                inputContainerStyles={styles.otpContainer}
                handleChange={code => setOTP(code)}
                numberOfInputs={4}
              />
              </View>

                
                <CustomButton label={"SUBMIT"} onPress={() => {navigation.navigate('Register') }} />

                {/* <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                    Or, login with ...
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 30,
                    }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <GoogleSVG height={24} width={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <FacebookSVG height={24} width={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <TwitterSVG height={24} width={24} />
                    </TouchableOpacity>
                </View> */}

                {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View> */}
            </View>
        </SafeAreaView>
    );
};

export default OtpScreen;
const styles = StyleSheet.create({
    otp: {
        borderWidth: 1,
        borderStyle: 'solid',
        color: 'black',
        // padding: '0%',
        height: 50,
        width: 50,
        // justifyContent: 'center',
        // marginRight: 10,
        // alignItems: 'center',
        borderRadius: 10,
        borderColor: '#D2D5DC',
      },
      otpContainer: {
        color: 'black',
        padding: '1%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
})