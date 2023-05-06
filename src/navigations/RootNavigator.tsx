import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '../pages/home';
import { EventIcon, Home_icon, Heart_icon, Settings_icon } from '../assets/icon/';
import { SettingsPage } from '../pages/settings';
import { PopularPage } from '../pages/popular';
import { Event_page } from '../pages/events';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = ({ navigation }: { navigation: any }) => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          borderWidth: 1,
          backgroundColor: '#F8F8F8',
          borderRadius: 50,
          borderTopColor: 'rgba(0, 0, 0, 0.04)',
          borderLeftColor: 'rgba(0, 0, 0, 0.04)',
          borderRightColor: 'rgba(0, 0, 0, 0.04)',
          borderBottomColor: 'rgba(0, 0, 0, 0.04)',
          height: 90,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: { marginTop: 10, width: 50, borderRadius: 50 },
          tabBarIcon: () => <Home_icon />,
        }}
      />
      <Tab.Screen
        name="popular"
        component={PopularPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: { marginTop: 10, width: 50, borderRadius: 50 },
          tabBarIcon: () => <Heart_icon />,
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event_page}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: { marginTop: 10, width: 50, borderRadius: 50 },
          tabBarIcon: () => <EventIcon />,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: { marginTop: 10, width: 50, borderRadius: 50 },
          tabBarIcon: () => <Settings_icon />,
        }}
      />

    </Tab.Navigator>
  );
};
