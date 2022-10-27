import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProfileScreen from '../screens/ProfileScreen';

import TabNavigator from './TabNavigator';
import Booking from '../screens/Booking';
import Membership from '../screens/DrawerPages/Membership';
import Feedback from '../screens/DrawerPages/Feedback';
import About from '../screens/DrawerPages/About';
import TermsCondtion from './TermsCondtion';
import Contact from '../screens/DrawerPages/Contact';
import HomeScreen from '../screens/HomeScreen';
import BranchesViewAll from '../screens/HomePage/BranchesViewAll';
import CenterNameScreen from '../screens/HomePage/CenterNameScreen';
import DoctorDetails from '../screens/HomePage/DoctorDetails';
import FacilityScreen from '../screens/HomePage/FacilityScreen';
import OtpSchame from '../screens/HomePage/OtpSchame';
import ToDoOpd from '../screens/HomePage/ToDoOpd';
import InvestigationScreen from '../screens/HomePage/InvestigationScreen';
import OptSchameCatagiry from '../screens/HomePage/OptSchameCatagiry';
import DoctorAbout from '../screens/HomePage/DoctorAbout';
import NotificationScreen from '../screens/NotificationScreen';
import NoticeDetails from '../screens/NoticeDetails';
import GameDetailsScreen from '../screens/GameDetailsScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import OnboardingSlider from '../screens/OnboardingSlider';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OtpScreen from '../screens/OtpScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
       name="Onboarding" 
       component={OnboardingScreen} 
       options={{ headerShown: false }}
       />
      <Stack.Screen name="OnboardingSlider" component={OnboardingSlider}  options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={RegisterScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="OtpScreen" component={OtpScreen}  options={{ headerShown: false }}/>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BranchesViewAll"
        component={BranchesViewAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CenterNameScreen"
        component={CenterNameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FacilityScreen"
        component={FacilityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpSchame"
        component={OtpSchame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToDoOpd"
        component={ToDoOpd}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InvestigationScreen"
        component={InvestigationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OptSchameCatagiry"
        component={OptSchameCatagiry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorAbout"
        component={DoctorAbout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoticeDetails"
        component={NoticeDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />

    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#4584FF',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Blog"
        component={Booking}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="pricetag-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={Membership}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="card-membership" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="feedback" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Hospital"
        component={About}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="md-information-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="contacts" size={22} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
};

export default AuthStack;
