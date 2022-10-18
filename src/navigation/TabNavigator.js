import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TopSheme from '../screens/TopSheme';
import BranchesViewAll from '../screens/HomePage/BranchesViewAll';
import CenterNameScreen from '../screens/HomePage/CenterNameScreen';
import DoctorDetails from '../screens/HomePage/DoctorDetails';
import FacilityScreen from '../screens/HomePage/FacilityScreen';
import OtpSchame from '../screens/HomePage/OtpSchame';
import ToDoOpd from '../screens/HomePage/ToDoOpd';
import InvestigationScreen from '../screens/HomePage/InvestigationScreen';
import OptSchameCatagiry from '../screens/HomePage/OptSchameCatagiry';
import DoctorAbout from '../screens/HomePage/DoctorAbout';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BranchesViewAll"
        component={BranchesViewAll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CenterNameScreen"
        component={CenterNameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FacilityScreen"
        component={FacilityScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpSchame"
        component={OtpSchame}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ToDoOpd"
        component={ToDoOpd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InvestigationScreen"
        component={InvestigationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OptSchameCatagiry"
        component={OptSchameCatagiry}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorAbout"
        component={DoctorAbout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: '#4584FF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#4584FF',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        
        })}
      />
      <Tab.Screen
        name="Notice"
        component={CartScreen}
        options={{
          // tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="notebook" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scheme"
        component={TopSheme}
        options={{
          // tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <AntDesign name="solution1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
