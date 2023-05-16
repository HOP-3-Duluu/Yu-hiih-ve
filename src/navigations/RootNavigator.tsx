import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '../pages/home';
import { EventIcon, Home_icon, Heart_icon, Settings_icon } from '../assets/icon/';
import { SettingsPage } from '../pages/settings';
import { PopularPage } from '../pages/popular';
import { Event_page } from '../pages/events';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = ({ navigation }: any) => {
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
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveBackgroundColor: '#EB5757',
        tabBarItemStyle: {
          maxWidth: '9%%',
          maxHeight: "60%",
          borderRadius: 50,
          justifyContent: 'center',
          alignSelf: 'center',
          marginLeft: "7%",
          marginRight: "8%",
          marginTop: "5%",
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <View>
            <Home_icon active={focused} />
          </View>
        }}
      />
      <Tab.Screen
        name="Popular"
        component={PopularPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <View>
            <Heart_icon active={focused} />
          </View>,
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event_page}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <View>
            <EventIcon active={focused} />
          </View>
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <View>
            <Settings_icon active={focused} />
          </View>
        }}
      />

    </Tab.Navigator>
  );
};
