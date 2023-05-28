import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigation } from './RootNavigator';
import { CategoriesPage } from '../pages/categories';
import { LocationPage } from '../pages/location';
import { SoftedCategoriesPage } from '../pages/softedCategories';
import { LoginScreen } from '../auth/user/login';
import { SignUpScreen } from '../auth/user/signUp';
import { MapPage } from '../pages/map';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomBarNavigator"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="categories"
          component={CategoriesPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detail"
          component={LocationPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="softedCategories"
          component={SoftedCategoriesPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userLogin"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userSignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="map"
          component={MapPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
