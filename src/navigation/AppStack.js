import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TabNavigator from './TabNavigator';
import Booking from '../screens/Booking';
import Membership from '../screens/DrawerPages/Membership';
import Feedback from '../screens/DrawerPages/Feedback';
import About from '../screens/DrawerPages/About';
import TermsCondtion from './TermsCondtion';
import Contact from '../screens/DrawerPages/Contact';

const Drawer = createDrawerNavigator();

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
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Blog"
        component={Booking}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="pricetag-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={Membership}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="card-membership" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="feedback" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Hospital"
        component={About}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="md-information-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="contacts" size={22} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
};

export default AuthStack;
