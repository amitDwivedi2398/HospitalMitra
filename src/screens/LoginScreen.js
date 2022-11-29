import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { set } from 'react-native-reanimated';
import OtpInputs from 'react-native-otp-inputs';


const LoginScreen = ({ navigation }) => {
  const [storeddata, setStoreddata] = useState('')
  const [userNumber, setUserNumber] = useState('')
  const [data, setData] = useState('')
  const [otp, setOTP] = useState('');

  const sendMobile = () => {
    console.log(userNumber);
    axios
      .post(
        `http://hospitalmitra.in/newadmin/api/ApiCommonController/user_loginbypassword`,
        {
          mobile_no: userNumber,
        },
      )
      .then(response => {
        console.log(response.data);
        setData(response.data.data.otp)
      })
      .catch(error => {
        console.log(error);
      });
  };
  const _storeData = async id => {
    try {
      await AsyncStorage.setItem('user_id', id);
      console.log('id Saved');
    } catch (error) {
      console.log('Some error in setting id');
    }
  };
  const getData = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      if (user_id !== null) {
        console.log('success');
        console.log('user_id ???????', user_id);
        setStoreddata(user_id);
        navigation.replace('Home');
      }
    } catch (e) {
      console.log('no Value in login');
    }
  };
  useEffect(() => {
    getData();
  }, [storeddata]);
  const verifyOtp = () => {
    console.log(userNumber, otp);
    axios
      .post(
        `http://hospitalmitra.in/newadmin/api/ApiCommonController/verify_otppp`,
        {
          mobile_no: userNumber,
          otp: otp,
        },
      )
      .then(response => {
        console.log('@@@@@', response.data);
        console.log('#####', response.data.data[0].id);
        if (response.data != null) {
          _storeData(response.data.data[0].id);
          navigation.replace('Home');
        } else {
          console.log('no id!');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      {data ?
        (
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
                  marginTop: 10
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
              <View style={{ height: 100 }}>
                <OtpInputs
                  textAlign="center"
                  inputStyles={styles.otp}
                  inputContainerStyles={styles.otpContainer}
                  handleChange={code => setOTP(code)}
                  numberOfInputs={4}
                  autoFocusOnLoad
                />
              </View>
              <CustomButton label={"SUBMIT"}  onPress={verifyOtp}  />

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
        )
        :
        (
          <ScrollView>
            <View style={{ paddingHorizontal: 25 }}>
              <View style={{ alignItems: 'center' }}>
                {/* <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          /> */}
                <Image style={{ width: 300, height: 250 }} source={require('../assets/VerifyEmail/midiyam.png')} />

              </View>

              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  fontSize: 28,
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: 30,
                }}>
                Login
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

              <InputField
                label={'Enter your Phone No. '}
                value={userNumber}
                color={'#333'}
                pcolor={'#333'}
                onChangeText={setUserNumber}
                icon={
                  <Ionicons
                    name="phone-portrait-outline"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5 }}
                  />
                }
              />

              <CustomButton label={"Login"} onPress={sendMobile} />

              <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                Or, login with ...
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                  Register
                </Text>
              </TouchableOpacity>

              {/* <View
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
          </ScrollView>
        )}

    </SafeAreaView>
  );
};

export default LoginScreen;
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
