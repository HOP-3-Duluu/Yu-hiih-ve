import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomePage } from '../pages/home';
import {BottomTabNavigation} from './RootNavigator';
import { CategoriesPage } from '../pages/categories';
import { LocationPage } from '../pages/location';

const Stack = createNativeStackNavigator();

export const StackNavigator = ({navigation}: {navigation: any}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomBarNavigator"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="categories"
          component={CategoriesPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detail"
          component={LocationPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};