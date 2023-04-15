import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../pages/home';
import { Home_icon } from '../assets/icon/home_icon';
import { Settings } from '../pages/settings';
import {Settings_icon} from "../assets/icon/settings_icon"

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = ({navigation}: {navigation: any}) => {
  return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: '#D3A762',
          tabBarStyle: {
            borderWidth: 1,
            backgroundColor: '#F8F8F8',
            borderRadius: 50,
            borderTopColor: "rgba(0, 0, 0, 0.04)",
            borderLeftColor: "rgba(0, 0, 0, 0.04)",
            borderRightColor: "rgba(0, 0, 0, 0.04)",
            borderBottomColor: "rgba(0, 0, 0, 0.04)",
            height: 90,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
        //   navigation={navigation}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarItemStyle: {width: 50, height: 60},
            tabBarIconStyle: {marginTop: 10 ,width: 50, borderRadius: 50},
            tabBarIcon: () => <Home_icon />,
          }}
        />
        <Tab.Screen
        name="settings"
        component={Settings}
        //   navigation={navigation}
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIconStyle: {marginTop: 10 ,width: 50, borderRadius: 50},
            tabBarIcon: () => <Settings_icon />,
          }}
        />
      </Tab.Navigator>
  );
};